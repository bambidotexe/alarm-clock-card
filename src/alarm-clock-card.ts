/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import './editor';

import type { Alarm, AlarmClockCardConfig } from './types';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';
import { mdiPlus, mdiContentSave, mdiDelete, mdiArrowLeft, mdiCheckboxMarked, mdiCheckboxBlankOutline } from "@mdi/js";
import { classMap } from 'lit-html/directives/class-map.js';

/* eslint no-console: 0 */
console.info(
  `%c  ALARM-CLOCK-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: white; font-weight: bold; background: #00EC76',
  'color: #00EC76; font-weight: bold; background: transparent',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'alarm-clock-card',
  name: 'Alarm clock Card',
  description: 'A template custom card for you to create alarm clock',
});

@customElement('alarm-clock-card')
export class AlarmClockCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('alarm-clock-card-editor');
  }

  public static getStubConfig(): object {
    return {};
  }

  // https://lit-element.polymer-project.org/guide/properties
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public edit = false;
  @property({ attribute: false }) public editHour = true;
  @property({ attribute: false }) public currentAlarmIndex: number | null = null;
  @property({ attribute: false }) public currentAlarm: Alarm | null = null;
  @property({ attribute: false }) public selectedAlarmIndex: number[] = [];
  @internalProperty() private config!: AlarmClockCardConfig;

  @property({ attribute: false }) public touchAlarmTimer;
  @property({ attribute: false }) public touchAlarmDuration = 500;

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: AlarmClockCardConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    const entity = config.entity;
    if (!entity || entity.substr(0, entity.indexOf('.')) !== 'input_text') {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: localize('card.name'),
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    const entity = this.config.entity;
    if (!entity) {
      return;
    }

    const alarms = this._getAlarms();

    const body = html`
      <mwc-icon-button class="alarm-add alarm-delete" @click=${(): void => { this.selectedAlarmIndex.length > 0 ? this._deleteSelectedAlarms() : this._addAlarm() }}>
        <ha-svg-icon .path=${this.selectedAlarmIndex.length > 0 ? mdiDelete : mdiPlus }></ha-svg-icon>
      </mwc-icon-button>
      <div class="alarm-clock">
        ${alarms.map((alarm, index) => html`
        <div class="alarm">
          <div class="alarm-datetime"
              @touchstart=${(e): void => { this._touchAlarmStart(index, e); }}
              @touchend=${(e): void => { this._touchAlarmEnd(index, e); }}
              @touchmove=${(e): void => { this._touchAlarmMove(e); }}
              @mousedown=${(e): void => { this._touchAlarmStart(index, e); }}
              @mouseup=${(e): void => { this._touchAlarmEnd(index, e); }}
            >
            <div class="alarm-time">
              ${(alarm.hour < 10 ? '0' : '' ) + alarm.hour}:${(alarm.minute < 10 ? '0' : '' ) + alarm.minute} </div> <div
                class="alarm-days">
                ${this._parseDays(alarm)}
            </div>
          </div>
          <div class="alarm-actions">
            ${this.selectedAlarmIndex.length > 0
              ? html`
                <ha-svg-icon .path=${this.selectedAlarmIndex.indexOf(index) !== -1 ? mdiCheckboxMarked : mdiCheckboxBlankOutline }></ha-svg-icon>
              `
              : html`
                <ha-switch .checked=${alarm.enabled} @click=${(): void => { this._toggleEnabledAlarm(index) }}>
                </ha-switch>
              `
            }
          </div>
          <mwc-ripple></mwc-ripple>
        </div>
        `)}
      </div>
      ${this.edit
        ? html`
          <div class="alarm-detail">
            <div class="alarm-detail-actions">
              <mwc-icon-button class="alarm-detail-delete"
                @click=${this._handleBack}>
                <ha-svg-icon .path=${mdiArrowLeft}></ha-svg-icon>
              </mwc-icon-button>
              <mwc-icon-button class="alarm-detail-save"
                @click=${this._saveAlarm}>
                <ha-svg-icon .path=${mdiContentSave}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            <div class="alarm-detail-timepicker">
              <div class="alarm-detail-timepicker-time">
                <input type="text" maxlength="2" pattern="[0-9]" .value=${((this.currentAlarm?.hour ?? 8) < 10 ? '0' : '' ) + this.currentAlarm?.hour} @change=${this._checkAndUpdateEditedAlarmHour} @click=${(): void => { this.editHour = true; }}>
                <span>:</span>
                <input type="text" maxlength="2" pattern="[0-9]" .value=${((this.currentAlarm?.minute ?? 0) < 10 ? '0' : '' ) + this.currentAlarm?.minute} @change=${this._checkAndUpdateEditedAlarmMinute} @click=${(): void => { this.editHour = false; }}>
              </div>
              <div class="clock">
                ${this.editHour
                    ? html`
                      <div class="clock-hour">
                        <mwc-icon-button hour="12" @click=${(): void => { this._updateEditedAlarmHour(12); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 12, 'deg270': true })}><span style="font-size: 16px; line-height: 26px; ">12</span></mwc-icon-button>
                        <mwc-icon-button hour="1" @click=${(): void => { this._updateEditedAlarmHour(1); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 1, 'deg300': true })}><span style="font-size: 16px; line-height: 26px; ">1</span></mwc-icon-button>
                        <mwc-icon-button hour="2" @click=${(): void => { this._updateEditedAlarmHour(2); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 2, 'deg330': true })}><span style="font-size: 16px; line-height: 26px; ">2</span></mwc-icon-button>
                        <mwc-icon-button hour="3" @click=${(): void => { this._updateEditedAlarmHour(3); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 3, 'deg0': true })}><span style="font-size: 16px; line-height: 26px; ">3</span></mwc-icon-button>
                        <mwc-icon-button hour="4" @click=${(): void => { this._updateEditedAlarmHour(4); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 4, 'deg30': true })}><span style="font-size: 16px; line-height: 26px; ">4</span></mwc-icon-button>
                        <mwc-icon-button hour="5" @click=${(): void => { this._updateEditedAlarmHour(5); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 5, 'deg60': true })}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button hour="6" @click=${(): void => { this._updateEditedAlarmHour(6); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 6, 'deg90': true })}><span style="font-size: 16px; line-height: 26px; ">6</span></mwc-icon-button>
                        <mwc-icon-button hour="7" @click=${(): void => { this._updateEditedAlarmHour(7); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 7, 'deg120': true })}><span style="font-size: 16px; line-height: 26px; ">7</span></mwc-icon-button>
                        <mwc-icon-button hour="8" @click=${(): void => { this._updateEditedAlarmHour(8); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 8, 'deg150': true })}><span style="font-size: 16px; line-height: 26px; ">8</span></mwc-icon-button>
                        <mwc-icon-button hour="9" @click=${(): void => { this._updateEditedAlarmHour(9); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 9, 'deg180': true })}><span style="font-size: 16px; line-height: 26px; ">9</span></mwc-icon-button>
                        <mwc-icon-button hour="10" @click=${(): void => { this._updateEditedAlarmHour(10); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 10, 'deg210': true })}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button hour="11" @click=${(): void => { this._updateEditedAlarmHour(11); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 11, 'deg240': true })}><span style="font-size: 16px; line-height: 26px; ">11</span></mwc-icon-button>

                        <mwc-icon-button hour="0" @click=${(): void => { this._updateEditedAlarmHour(0); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 0, 'closeDeg270': true })}><span style="font-size: 14px; line-height: 24px; ">0</span></mwc-icon-button>
                        <mwc-icon-button hour="13" @click=${(): void => { this._updateEditedAlarmHour(13); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 13, 'closeDeg300': true })}><span style="font-size: 14px; line-height: 24px; ">13</span></mwc-icon-button>
                        <mwc-icon-button hour="14" @click=${(): void => { this._updateEditedAlarmHour(14); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 14, 'closeDeg330': true })}><span style="font-size: 14px; line-height: 24px; ">14</span></mwc-icon-button>
                        <mwc-icon-button hour="15" @click=${(): void => { this._updateEditedAlarmHour(15); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 15, 'closeDeg0': true })}><span style="font-size: 14px; line-height: 24px; ">15</span></mwc-icon-button>
                        <mwc-icon-button hour="16" @click=${(): void => { this._updateEditedAlarmHour(16); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 16, 'closeDeg30': true })}><span style="font-size: 14px; line-height: 24px; ">16</span></mwc-icon-button>
                        <mwc-icon-button hour="17" @click=${(): void => { this._updateEditedAlarmHour(17); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 17, 'closeDeg60': true })}><span style="font-size: 14px; line-height: 24px; ">17</span></mwc-icon-button>
                        <mwc-icon-button hour="18" @click=${(): void => { this._updateEditedAlarmHour(18); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 18, 'closeDeg90': true })}><span style="font-size: 14px; line-height: 24px; ">18</span></mwc-icon-button>
                        <mwc-icon-button hour="19" @click=${(): void => { this._updateEditedAlarmHour(19); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 19, 'closeDeg120': true })}><span style="font-size: 14px; line-height: 24px; ">19</span></mwc-icon-button>
                        <mwc-icon-button hour="20" @click=${(): void => { this._updateEditedAlarmHour(20); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 20, 'closeDeg150': true })}><span style="font-size: 14px; line-height: 24px; ">20</span></mwc-icon-button>
                        <mwc-icon-button hour="21" @click=${(): void => { this._updateEditedAlarmHour(21); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 21, 'closeDeg180': true })}><span style="font-size: 14px; line-height: 24px; ">21</span></mwc-icon-button>
                        <mwc-icon-button hour="22" @click=${(): void => { this._updateEditedAlarmHour(22); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 22, 'closeDeg210': true })}><span style="font-size: 14px; line-height: 24px; ">22</span></mwc-icon-button>
                        <mwc-icon-button hour="23" @click=${(): void => { this._updateEditedAlarmHour(23); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 23, 'closeDeg240': true })}><span style="font-size: 14px; line-height: 24px; ">23</span></mwc-icon-button>
                      </div>
                    `
                    : html`
                      <div class="clock-minute">
                        <mwc-icon-button minute="0" @click=${(): void => { this._updateEditedAlarmMinute(0) }} class=${classMap({ enabled: this.currentAlarm?.minute == 0, 'deg270': true })}><span style="font-size: 16px; line-height: 26px; ">0</span></mwc-icon-button>
                        <mwc-icon-button minute="5" @click=${(): void => { this._updateEditedAlarmMinute(5) }} class=${classMap({ enabled: this.currentAlarm?.minute == 5, 'deg300': true })}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button minute="10" @click=${(): void => { this._updateEditedAlarmMinute(10) }} class=${classMap({ enabled: this.currentAlarm?.minute == 10, 'deg330': true })}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button minute="15" @click=${(): void => { this._updateEditedAlarmMinute(15) }} class=${classMap({ enabled: this.currentAlarm?.minute == 15, 'deg0': true })}><span style="font-size: 16px; line-height: 26px; ">15</span></mwc-icon-button>
                        <mwc-icon-button minute="20" @click=${(): void => { this._updateEditedAlarmMinute(20) }} class=${classMap({ enabled: this.currentAlarm?.minute == 20, 'deg30': true })}><span style="font-size: 16px; line-height: 26px; ">20</span></mwc-icon-button>
                        <mwc-icon-button minute="25" @click=${(): void => { this._updateEditedAlarmMinute(25) }} class=${classMap({ enabled: this.currentAlarm?.minute == 25, 'deg60': true })}><span style="font-size: 16px; line-height: 26px; ">25</span></mwc-icon-button>
                        <mwc-icon-button minute="30" @click=${(): void => { this._updateEditedAlarmMinute(30) }} class=${classMap({ enabled: this.currentAlarm?.minute == 30, 'deg90': true })}><span style="font-size: 16px; line-height: 26px; ">30</span></mwc-icon-button>
                        <mwc-icon-button minute="35" @click=${(): void => { this._updateEditedAlarmMinute(35) }} class=${classMap({ enabled: this.currentAlarm?.minute == 35, 'deg120': true })}><span style="font-size: 16px; line-height: 26px; ">35</span></mwc-icon-button>
                        <mwc-icon-button minute="40" @click=${(): void => { this._updateEditedAlarmMinute(40) }} class=${classMap({ enabled: this.currentAlarm?.minute == 40, 'deg150': true })}><span style="font-size: 16px; line-height: 26px; ">40</span></mwc-icon-button>
                        <mwc-icon-button minute="45" @click=${(): void => { this._updateEditedAlarmMinute(45) }} class=${classMap({ enabled: this.currentAlarm?.minute == 45, 'deg180': true })}><span style="font-size: 16px; line-height: 26px; ">45</span></mwc-icon-button>
                        <mwc-icon-button minute="50" @click=${(): void => { this._updateEditedAlarmMinute(50) }} class=${classMap({ enabled: this.currentAlarm?.minute == 50, 'deg210': true })}><span style="font-size: 16px; line-height: 26px; ">50</span></mwc-icon-button>
                        <mwc-icon-button minute="55" @click=${(): void => { this._updateEditedAlarmMinute(55) }} class=${classMap({ enabled: this.currentAlarm?.minute == 55, 'deg240': true })}><span style="font-size: 16px; line-height: 26px; ">55</span></mwc-icon-button>
                      </div>
                    `
                }
              </div>
            </div>
            <p>${localize('card.repeat')}</p>
            <div class="alarm-detail-repeat">
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(0) }} class=${classMap({ enabled: !!this.currentAlarm?.monday })}>
                <span style="font-size: 16px; line-height: 26px; ">${localize('card.daysFirstLetter.monday')}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(1) }} class=${classMap({ enabled: !!this.currentAlarm?.tuesday })}>
                <span style="font-size: 16px; line-height: 26px;">${localize('card.daysFirstLetter.tuesday')}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(2) }} class=${classMap({ enabled: !!this.currentAlarm?.wednesday })}>
                <span style="font-size: 16px; line-height: 26px;">${localize('card.daysFirstLetter.wednesday')}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(3) }} class=${classMap({ enabled: !!this.currentAlarm?.thursday })}>
                <span style="font-size: 16px; line-height: 26px;">${localize('card.daysFirstLetter.thursday')}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(4) }} class=${classMap({ enabled: !!this.currentAlarm?.friday })}>
                <span style="font-size: 16px; line-height: 26px;">${localize('card.daysFirstLetter.friday')}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(5) }} class=${classMap({ enabled: !!this.currentAlarm?.saturday })}>
                <span style="font-size: 16px; line-height: 26px;">${localize('card.daysFirstLetter.saturday')}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${(): void => { this._updateEditedAlarmEabledDay(6) }} class=${classMap({ enabled: !!this.currentAlarm?.sunday })}>
                <span style="font-size: 16px; line-height: 26px;">${localize('card.daysFirstLetter.sunday')}</span>
              </mwc-icon-button>
            </div>
          </div>
        `
        : html``
      }
    `;

    return html`
      <ha-card .header=${this.config.name} .label=${`Alarm clock: ${this.config.entity || 'No Entity Defined' }`}>
        ${body}
      </ha-card>
    `;
  }

  private _decodeRaw(raw: string): Alarm {
    return {
      hour: +raw.slice(0, 2),
      minute: +raw.slice(2, 4),
      enabled: !!+raw.slice(4, 5),
      monday: !!+raw.slice(5, 6),
      tuesday: !!+raw.slice(6, 7),
      wednesday: !!+raw.slice(7, 8),
      thursday: !!+raw.slice(8, 9),
      friday: !!+raw.slice(9, 10),
      saturday: !!+raw.slice(10, 11),
      sunday: !!+raw.slice(11, 12)
    }
  }

  private _encodeRaw(alarm: Alarm): string {
    let raw = '';
    raw += (alarm.hour < 10 ? '0' : '') + alarm.hour;
    raw += (alarm.minute < 10 ? '0' : '') + alarm.minute;
    raw += alarm.enabled ? '1' : '0';
    raw += alarm.monday ? '1' : '0';
    raw += alarm.tuesday ? '1' : '0';
    raw += alarm.wednesday ? '1' : '0';
    raw += alarm.thursday ? '1' : '0';
    raw += alarm.friday ? '1' : '0';
    raw += alarm.saturday ? '1' : '0';
    raw += alarm.sunday ? '1' : '0';
    return raw;
  }

  private _getAlarms(): Alarm[] {
    const entity = this.config.entity;
    if (!entity) {
      return [];
    }

    return this.hass.states[entity].state
      .split(',')
      .filter(x => x.length == 12)
      .map(this._decodeRaw);
  }

  private _setAlarms(alarms: Alarm[]): void {
    const entity = this.config.entity;
    if (!entity) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/camelcase
    this.hass.callService('input_text', 'set_value', { entity_id: entity, value: alarms.map(this._encodeRaw).join(',') });
  }

  private _toggleEnabledAlarm(index: number): void {
    const newAlarms = this._getAlarms().slice(0);
    newAlarms[index].enabled = !newAlarms[index].enabled;
    this._setAlarms(newAlarms);
  }

  private _touchAlarmStart(index: number, e: any): void {
    this.touchAlarmTimer = setTimeout(() => { this.touchAlarmTimer = null; this._selectAlarm(index); }, this.touchAlarmDuration);
    e.stopPropagation();
    e.preventDefault();
  }

  private _touchAlarmEnd(index: number, e: any): void {
    if (this.touchAlarmTimer) {
      clearTimeout(this.touchAlarmTimer);
      this.touchAlarmTimer = null;

      if (this.selectedAlarmIndex.length > 0) {
        this._selectAlarm(index);
      } else {
        this._editAlarm(index);
      }
    }
    e.stopPropagation();
    e.preventDefault();
  }

  private _touchAlarmMove(e: any): void {
    if (this.touchAlarmTimer) {
      clearTimeout(this.touchAlarmTimer);
      this.touchAlarmTimer = null;
    }
    e.stopPropagation();
    e.preventDefault();
  }

  private _addAlarm(): void {
    const newAlarms = this._getAlarms().slice(0);
    newAlarms.push({
      hour: 8,
      minute: 0,
      enabled: true,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    });
    this._setAlarms(newAlarms);
  }

  private _editAlarm(index: number): void {
    this.currentAlarmIndex = index;
    this.currentAlarm = this._getAlarms()[index];
    this.editHour = true;
    this.edit = true;
  }

  private _deleteSelectedAlarms(): void {
    const newAlarms = this._getAlarms().slice();
    const indexes = this.selectedAlarmIndex.sort().reverse();
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      newAlarms.splice(index, 1);
    }
    this.selectedAlarmIndex = [];
    this._setAlarms(newAlarms);
  }

  private _saveAlarm(): void {
    const currentAlarmIndex = this.currentAlarmIndex;
    const currentAlarm = this.currentAlarm;
    const newAlarms = this._getAlarms().slice();
    if (currentAlarm && currentAlarmIndex) {
      newAlarms[currentAlarmIndex] = currentAlarm;
    }
    this._setAlarms(newAlarms);
    this.currentAlarm = null;
    this.currentAlarmIndex = null;
    this.edit = false;
  }

  private _selectAlarm(index): void {
    const selectedAlarmIndex = this.selectedAlarmIndex.slice(0);
    if (selectedAlarmIndex.indexOf(index) === -1) {
      selectedAlarmIndex.push(index);
    } else {
      selectedAlarmIndex.splice(selectedAlarmIndex.indexOf(index), 1);
    }
    this.selectedAlarmIndex = selectedAlarmIndex;
  }

  private _checkAndUpdateEditedAlarmHour(event: any): void {
    let newHour = +event.target.value;
    if (newHour > 23) {
      newHour = 23;
    }
    if (newHour < 0) {
      newHour = 0;
    }

    this._updateEditedAlarmHour(newHour);
  }

  private _checkAndUpdateEditedAlarmMinute(event: any): void {
    let newMinute = +event.target.value;
    if (newMinute > 59) {
      newMinute = 59;
    }
    if (newMinute < 0) {
      newMinute = 0;
    }

    this._updateEditedAlarmMinute(newMinute);
  }

  private _updateEditedAlarmHour(hour: number): void {
    const newCurrentAlarm = JSON.parse(JSON.stringify(this.currentAlarm));
    newCurrentAlarm.hour = hour;
    this.currentAlarm = newCurrentAlarm;
  }

  private _updateEditedAlarmMinute(minute: number): void {
    const newCurrentAlarm = JSON.parse(JSON.stringify(this.currentAlarm));
    newCurrentAlarm.minute = minute;
    this.currentAlarm = newCurrentAlarm;
  }

  private _updateEditedAlarmEabledDay(indexDay: number): void {
    let day;
    switch (indexDay) {
      case 0:
        day = 'monday';
        break;
      case 1:
        day = 'tuesday';
        break;
      case 2:
        day = 'wednesday';
        break;
      case 3:
        day = 'thursday';
        break;
      case 4:
        day = 'friday';
        break;
      case 5:
        day = 'saturday';
        break;
      case 6:
      default:
        day = 'sunday';
        break;
    }
    const newCurrentAlarm = JSON.parse(JSON.stringify(this.currentAlarm));
    newCurrentAlarm[day] = !newCurrentAlarm[day];
    this.currentAlarm = newCurrentAlarm;
  }

  private _handleBack(): void {
    this.currentAlarm = null;
    this.currentAlarmIndex = null;
    this.edit = false;
  }

  private _parseDays(alarm: Alarm): string {
    const days = [alarm.monday, alarm.tuesday, alarm.wednesday, alarm.thursday, alarm.friday, alarm.saturday, alarm.sunday];
    if (days.every(x => !x)) {
      return localize('card.tommorow');
    } else if (days.every(x => !!x)) {
      return localize('card.everyday');
    } else {
      return days
        .map((value, index) => {
          if (value) {
            switch (index) {
              case 0:
                return localize('card.daysShort.monday');
              case 1:
                return localize('card.daysShort.tuesday');
              case 2:
                return localize('card.daysShort.wednesday');
              case 3:
                return localize('card.daysShort.thursday');
              case 4:
                return localize('card.daysShort.friday');
              case 5:
                return localize('card.daysShort.saturday');
              case 6:
                return localize('card.daysShort.sunday');
            }
          }
          return null;
        })
        .filter(x => x !== null)
        .join(', ')
    }
  }

  static get styles(): CSSResult {
    return css`
      ha-card {
        position: relative;
        overflow: hidden;
        min-height: 470px;
      }

      .alarm-add, .alarm-delete {
        position: absolute;
        top: 16px;
        right: 16px;
      }

      .alarm-clock {
        display: flex;
        flex-direction: column;
        padding: 0px 0px 16px 0px;
      }

      .alarm {
        display: flex;
        flex-direction: row;
        margin-top: 16px;
        padding: 0px 16px;
        position: relative;
      }

      .alarm:nth-child(1) {
        margin-top: 0;
      }

      .alarm-datetime {
        display: flex;
        flex-direction: column;
        flex: 1;
        cursor: pointer;
      }

      .alarm-time {
        line-height: 32px;
        font-size: 32px;
        font-weight: bold;
      }

      .alarm-days {
        font-size: 11px;
        opacity: 0.5;
      }

      .alarm-actions {
        flex: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .alarm-detail {
        color: white;
        display: flex;
        flex-direction: column;
        padding: 16px 16px 16px 16px;
        background-color: var(--primary-color);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .alarm-detail-timepicker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .alarm-detail-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .alarm-detail-repeat {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }

      .alarm-detail-repeat mwc-icon-button {
        --mdc-icon-button-size: 30px;
      }

      .clock-hour, .clock-minute {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .clock mwc-icon-button.enabled,
      .alarm-detail-repeat mwc-icon-button.enabled {
        background-color: white;
        border-radius: 50%;
        color: var(--primary-color);
      }

      .clock mwc-icon-button[hour="0"],
      .clock mwc-icon-button[hour="13"],
      .clock mwc-icon-button[hour="14"],
      .clock mwc-icon-button[hour="15"],
      .clock mwc-icon-button[hour="16"],
      .clock mwc-icon-button[hour="17"],
      .clock mwc-icon-button[hour="18"],
      .clock mwc-icon-button[hour="19"],
      .clock mwc-icon-button[hour="20"],
      .clock mwc-icon-button[hour="21"],
      .clock mwc-icon-button[hour="22"],
      .clock mwc-icon-button[hour="23"],
      .clock mwc-icon-button[minute="0"],
      .clock mwc-icon-button[minute="5"],
      .clock mwc-icon-button[minute="10"],
      .clock mwc-icon-button[minute="15"],
      .clock mwc-icon-button[minute="20"],
      .clock mwc-icon-button[minute="25"],
      .clock mwc-icon-button[minute="30"],
      .clock mwc-icon-button[minute="35"],
      .clock mwc-icon-button[minute="40"],
      .clock mwc-icon-button[minute="45"],
      .clock mwc-icon-button[minute="50"],
      .clock mwc-icon-button[minute="55"] {
        --mdc-icon-button-size: 30px;
        position: absolute;
        top: 110px;
        left: 110px;
      }

      .clock mwc-icon-button[hour="12"],
      .clock mwc-icon-button[hour="1"],
      .clock mwc-icon-button[hour="2"],
      .clock mwc-icon-button[hour="3"],
      .clock mwc-icon-button[hour="4"],
      .clock mwc-icon-button[hour="5"],
      .clock mwc-icon-button[hour="6"],
      .clock mwc-icon-button[hour="7"],
      .clock mwc-icon-button[hour="8"],
      .clock mwc-icon-button[hour="9"],
      .clock mwc-icon-button[hour="10"],
      .clock mwc-icon-button[hour="11"] {
        --mdc-icon-button-size: 40px;
        position: absolute;
        top: 105px;
        left: 105px;
      }

      .deg0 { transform: translate(100px); }
      .deg30 { transform: rotate(30deg) translate(100px) rotate(-30deg); }
      .deg60 { transform: rotate(60deg) translate(100px) rotate(-60deg); }
      .deg90 { transform: rotate(90deg) translate(100px) rotate(-90deg); }
      .deg120 { transform: rotate(120deg) translate(100px) rotate(-120deg); }
      .deg150 { transform: rotate(150deg) translate(100px) rotate(-150deg); }
      .deg180 { transform: rotate(180deg) translate(100px) rotate(-180deg); }
      .deg210 { transform: rotate(210deg) translate(100px) rotate(-210deg); }
      .deg240 { transform: rotate(240deg) translate(100px) rotate(-240deg); }
      .deg270 { transform: rotate(270deg) translate(100px) rotate(-270deg); }
      .deg300 { transform: rotate(300deg) translate(100px) rotate(-300deg); }
      .deg330 { transform: rotate(330deg) translate(100px) rotate(-330deg); }
      .closeDeg0 { transform: translate(70px); }
      .closeDeg30 { transform: rotate(30deg) translate(70px) rotate(-30deg); }
      .closeDeg60 { transform: rotate(60deg) translate(70px) rotate(-60deg); }
      .closeDeg90 { transform: rotate(90deg) translate(70px) rotate(-90deg); }
      .closeDeg120 { transform: rotate(120deg) translate(70px) rotate(-120deg); }
      .closeDeg150 { transform: rotate(150deg) translate(70px) rotate(-150deg); }
      .closeDeg180 { transform: rotate(180deg) translate(70px) rotate(-180deg); }
      .closeDeg210 { transform: rotate(210deg) translate(70px) rotate(-210deg); }
      .closeDeg240 { transform: rotate(240deg) translate(70px) rotate(-240deg); }
      .closeDeg270 { transform: rotate(270deg) translate(70px) rotate(-270deg); }
      .closeDeg300 { transform: rotate(300deg) translate(70px) rotate(-300deg); }
      .closeDeg330 { transform: rotate(330deg) translate(70px) rotate(-330deg); }

      .alarm-detail-timepicker-time {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      }

      .alarm-detail-timepicker-time input {
        color: white;
        width: 40px;
        height: 40px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        border: none;
        border-bottom: solid 1px white;
        background-color: transparent;
        cursor: pointer;
      }

      .alarm-detail-timepicker-time input:active {
        border: none;
        background-color: transparent;
      }

      .alarm-detail-timepicker-time span {
        font-size: 24px;
        font-weight: bold;
        margin: 4px;
      }

      .clock {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.5);
        position: relative;
      }
    `;
  }
}
