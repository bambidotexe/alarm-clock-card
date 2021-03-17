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
import { mdiPlus, mdiContentSave, mdiDelete, mdiArrowLeft } from "@mdi/js";
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
  @property({ attribute: false }) public touchIndex: number | null = null;
  @property({ attribute: false }) public touchTimeoutId: any = null;
  @property({ attribute: false }) public currentAlarmIndex: number | null = null;
  @property({ attribute: false }) public currentAlarm: Alarm | null = null;
  @property({ attribute: false }) public selectedAlarmIndex: number[] = [];
  @internalProperty() private config!: AlarmClockCardConfig;

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
      name: 'Alarmes',
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
      <mwc-icon-button class="alarm-add alarm-delete" @click=${() => { this.selectedAlarmIndex.length > 0 ? this._handleDelete() : this._handleAdd() }}>
        <ha-svg-icon .path=${this.selectedAlarmIndex.length > 0 ? mdiDelete : mdiPlus }></ha-svg-icon>
      </mwc-icon-button>
      <div class="alarm-clock">
        ${alarms.map((alarm, index) => html`
        <div class="alarm">
          <div class="alarm-datetime" @mousedown=${() => { this._handleTouch(index) }} @click=${() => { this._handleClick(index) }}>
            <div class="alarm-time">
              ${(alarm.hour < 10 ? '0' : '' ) + alarm.hour}:${(alarm.minute < 10 ? '0' : '' ) + alarm.minute} </div> <div
                class="alarm-days">
                ${this._parseDays(alarm)}
            </div>
          </div>
          <div class="alarm-actions">
            ${this.selectedAlarmIndex.length > 0
              ? html`
                <input type="checkbox" .checked=${this.selectedAlarmIndex.indexOf(index) !== -1} @click=${() => { this._toggleSelectedIndex(index) }}>
              `
              : html`
                <ha-switch .checked=${alarm.enabled} @click=${() => { this._handleToggleAlarm(index) }}>
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
                @click=${this._handleSave}>
                <ha-svg-icon .path=${mdiContentSave}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            <div class="alarm-detail-timepicker">
              <div class="alarm-detail-timepicker-time">
                <input type="text" maxlength="2" pattern="[0-9]" .value=${(this.currentAlarm!!.hour < 10 ? '0' : '' ) + this.currentAlarm!!.hour} @change=${this._handleCheckUpdateHour} @click=${()=> { this.editHour = true; }}>
                <span>:</span>
                <input type="text" maxlength="2" pattern="[0-9]" .value=${(this.currentAlarm!!.minute < 10 ? '0' : '' ) + this.currentAlarm!!.minute} @change=${this._handleCheckUpdateMinute} @click=${()=> { this.editHour = false; }}>
              </div>
              <div class="clock">
                ${this.editHour
                    ? html`
                      <div class="clock-hour">
                        <mwc-icon-button hour="12" @click=${()=> { this._handleUpdateHour(12); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 12, 'deg270': true })}><span style="font-size: 16px; line-height: 26px; ">12</span></mwc-icon-button>
                        <mwc-icon-button hour="1" @click=${()=> { this._handleUpdateHour(1); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 1, 'deg300': true })}><span style="font-size: 16px; line-height: 26px; ">1</span></mwc-icon-button>
                        <mwc-icon-button hour="2" @click=${()=> { this._handleUpdateHour(2); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 2, 'deg330': true })}><span style="font-size: 16px; line-height: 26px; ">2</span></mwc-icon-button>
                        <mwc-icon-button hour="3" @click=${()=> { this._handleUpdateHour(3); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 3, 'deg0': true })}><span style="font-size: 16px; line-height: 26px; ">3</span></mwc-icon-button>
                        <mwc-icon-button hour="4" @click=${()=> { this._handleUpdateHour(4); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 4, 'deg30': true })}><span style="font-size: 16px; line-height: 26px; ">4</span></mwc-icon-button>
                        <mwc-icon-button hour="5" @click=${()=> { this._handleUpdateHour(5); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 5, 'deg60': true })}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button hour="6" @click=${()=> { this._handleUpdateHour(6); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 6, 'deg90': true })}><span style="font-size: 16px; line-height: 26px; ">6</span></mwc-icon-button>
                        <mwc-icon-button hour="7" @click=${()=> { this._handleUpdateHour(7); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 7, 'deg120': true })}><span style="font-size: 16px; line-height: 26px; ">7</span></mwc-icon-button>
                        <mwc-icon-button hour="8" @click=${()=> { this._handleUpdateHour(8); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 8, 'deg150': true })}><span style="font-size: 16px; line-height: 26px; ">8</span></mwc-icon-button>
                        <mwc-icon-button hour="9" @click=${()=> { this._handleUpdateHour(9); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 9, 'deg180': true })}><span style="font-size: 16px; line-height: 26px; ">9</span></mwc-icon-button>
                        <mwc-icon-button hour="10" @click=${()=> { this._handleUpdateHour(10); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 10, 'deg210': true })}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button hour="11" @click=${()=> { this._handleUpdateHour(11); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 11, 'deg240': true })}><span style="font-size: 16px; line-height: 26px; ">11</span></mwc-icon-button>

                        <mwc-icon-button hour="0" @click=${()=> { this._handleUpdateHour(0); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 0, 'deg2702': true })}><span style="font-size: 14px; line-height: 24px; ">0</span></mwc-icon-button>
                        <mwc-icon-button hour="13" @click=${()=> { this._handleUpdateHour(13); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 13, 'deg3002': true })}><span style="font-size: 14px; line-height: 24px; ">13</span></mwc-icon-button>
                        <mwc-icon-button hour="14" @click=${()=> { this._handleUpdateHour(14); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 14, 'deg3302': true })}><span style="font-size: 14px; line-height: 24px; ">14</span></mwc-icon-button>
                        <mwc-icon-button hour="15" @click=${()=> { this._handleUpdateHour(15); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 15, 'deg02': true })}><span style="font-size: 14px; line-height: 24px; ">15</span></mwc-icon-button>
                        <mwc-icon-button hour="16" @click=${()=> { this._handleUpdateHour(16); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 16, 'deg302': true })}><span style="font-size: 14px; line-height: 24px; ">16</span></mwc-icon-button>
                        <mwc-icon-button hour="17" @click=${()=> { this._handleUpdateHour(17); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 17, 'deg602': true })}><span style="font-size: 14px; line-height: 24px; ">17</span></mwc-icon-button>
                        <mwc-icon-button hour="18" @click=${()=> { this._handleUpdateHour(18); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 18, 'deg902': true })}><span style="font-size: 14px; line-height: 24px; ">18</span></mwc-icon-button>
                        <mwc-icon-button hour="19" @click=${()=> { this._handleUpdateHour(19); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 19, 'deg1202': true })}><span style="font-size: 14px; line-height: 24px; ">19</span></mwc-icon-button>
                        <mwc-icon-button hour="20" @click=${()=> { this._handleUpdateHour(20); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 20, 'deg1502': true })}><span style="font-size: 14px; line-height: 24px; ">20</span></mwc-icon-button>
                        <mwc-icon-button hour="21" @click=${()=> { this._handleUpdateHour(21); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 21, 'deg1802': true })}><span style="font-size: 14px; line-height: 24px; ">21</span></mwc-icon-button>
                        <mwc-icon-button hour="22" @click=${()=> { this._handleUpdateHour(22); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 22, 'deg2102': true })}><span style="font-size: 14px; line-height: 24px; ">22</span></mwc-icon-button>
                        <mwc-icon-button hour="23" @click=${()=> { this._handleUpdateHour(23); this.editHour = false; }} class=${classMap({ enabled: this.currentAlarm?.hour == 23, 'deg2402': true })}><span style="font-size: 14px; line-height: 24px; ">23</span></mwc-icon-button>
                      </div>
                    `
                    : html`
                      <div class="clock-minute">
                        <mwc-icon-button minute="0" @click=${()=> { this._handleUpdateMinute(0) }} class=${classMap({ enabled: this.currentAlarm?.minute == 0, 'deg270': true })}><span style="font-size: 16px; line-height: 26px; ">0</span></mwc-icon-button>
                        <mwc-icon-button minute="5" @click=${()=> { this._handleUpdateMinute(5) }} class=${classMap({ enabled: this.currentAlarm?.minute == 5, 'deg300': true })}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button minute="10" @click=${()=> { this._handleUpdateMinute(10) }} class=${classMap({ enabled: this.currentAlarm?.minute == 10, 'deg330': true })}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button minute="15" @click=${()=> { this._handleUpdateMinute(15) }} class=${classMap({ enabled: this.currentAlarm?.minute == 15, 'deg0': true })}><span style="font-size: 16px; line-height: 26px; ">15</span></mwc-icon-button>
                        <mwc-icon-button minute="20" @click=${()=> { this._handleUpdateMinute(20) }} class=${classMap({ enabled: this.currentAlarm?.minute == 20, 'deg30': true })}><span style="font-size: 16px; line-height: 26px; ">20</span></mwc-icon-button>
                        <mwc-icon-button minute="25" @click=${()=> { this._handleUpdateMinute(25) }} class=${classMap({ enabled: this.currentAlarm?.minute == 25, 'deg60': true })}><span style="font-size: 16px; line-height: 26px; ">25</span></mwc-icon-button>
                        <mwc-icon-button minute="30" @click=${()=> { this._handleUpdateMinute(30) }} class=${classMap({ enabled: this.currentAlarm?.minute == 30, 'deg90': true })}><span style="font-size: 16px; line-height: 26px; ">30</span></mwc-icon-button>
                        <mwc-icon-button minute="35" @click=${()=> { this._handleUpdateMinute(35) }} class=${classMap({ enabled: this.currentAlarm?.minute == 35, 'deg120': true })}><span style="font-size: 16px; line-height: 26px; ">35</span></mwc-icon-button>
                        <mwc-icon-button minute="40" @click=${()=> { this._handleUpdateMinute(40) }} class=${classMap({ enabled: this.currentAlarm?.minute == 40, 'deg150': true })}><span style="font-size: 16px; line-height: 26px; ">40</span></mwc-icon-button>
                        <mwc-icon-button minute="45" @click=${()=> { this._handleUpdateMinute(45) }} class=${classMap({ enabled: this.currentAlarm?.minute == 45, 'deg180': true })}><span style="font-size: 16px; line-height: 26px; ">45</span></mwc-icon-button>
                        <mwc-icon-button minute="50" @click=${()=> { this._handleUpdateMinute(50) }} class=${classMap({ enabled: this.currentAlarm?.minute == 50, 'deg210': true })}><span style="font-size: 16px; line-height: 26px; ">50</span></mwc-icon-button>
                        <mwc-icon-button minute="55" @click=${()=> { this._handleUpdateMinute(55) }} class=${classMap({ enabled: this.currentAlarm?.minute == 55, 'deg240': true })}><span style="font-size: 16px; line-height: 26px; ">55</span></mwc-icon-button>
                      </div>
                    `
                }
              </div>
            </div>
            <p>Répeter</p>
            <div class="alarm-detail-repeat">
              <mwc-icon-button @click=${()=> { this._handleToggleDay(0) }} class=${classMap({ enabled: !!this.currentAlarm?.monday })}>
                <span style="font-size: 16px; line-height: 26px; ">L</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=> { this._handleToggleDay(1) }} class=${classMap({ enabled: !!this.currentAlarm?.tuesday })}>
                <span style="font-size: 16px; line-height: 26px;">M</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=> { this._handleToggleDay(2) }} class=${classMap({ enabled: !!this.currentAlarm?.wednesday })}>
                <span style="font-size: 16px; line-height: 26px;">M</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=> { this._handleToggleDay(3) }} class=${classMap({ enabled: !!this.currentAlarm?.thursday })}>
                <span style="font-size: 16px; line-height: 26px;">J</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=> { this._handleToggleDay(4) }} class=${classMap({ enabled: !!this.currentAlarm?.friday })}>
                <span style="font-size: 16px; line-height: 26px;">V</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=> { this._handleToggleDay(5) }} class=${classMap({ enabled: !!this.currentAlarm?.saturday })}>
                <span style="font-size: 16px; line-height: 26px;">S</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=> { this._handleToggleDay(6) }} class=${classMap({ enabled: !!this.currentAlarm?.sunday })}>
                <span style="font-size: 16px; line-height: 26px;">D</span>
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

    this.hass.callService('input_text', 'set_value', { entity_id: entity, value: alarms.map(this._encodeRaw).join(',') });
  }

  private _handleToggleAlarm(index: number): void {
    const newAlarms = this._getAlarms().slice(0);
    newAlarms[index].enabled = !newAlarms[index].enabled;
    this._setAlarms(newAlarms);
  }

  private _handleAdd(): void {
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

  private _handleTouch(index: number) {
    this.touchIndex = index;
    this.touchTimeoutId = setTimeout(() => {
      this._toggleSelectedIndex(index);
      this.touchTimeoutId = null;
      this.touchIndex = null;
    }, 1000);
  }

  private _handleClick(index: number) {
    if (this.touchTimeoutId) {
      clearTimeout(this.touchTimeoutId);
      this.touchTimeoutId = null;
      this.touchIndex = null;
      this._handleToggleSelectAlarm(index);
    }
  }

  private _handleToggleSelectAlarm(index: number): void {
    if (this.selectedAlarmIndex.length > 0) {
      this._toggleSelectedIndex(index);
    } else {
      this.currentAlarmIndex = index;
      this.currentAlarm = this._getAlarms()[index];
      this.editHour = true;
      this.edit = true;
    }
  }

  private _toggleSelectedIndex(index) {
    const selectedAlarmIndex = this.selectedAlarmIndex.slice(0);
    if (selectedAlarmIndex.indexOf(index) === -1) {
      selectedAlarmIndex.push(index);
    } else {
      selectedAlarmIndex.splice(selectedAlarmIndex.indexOf(index), 1);
    }
    this.selectedAlarmIndex = selectedAlarmIndex;
  }

  private _handleCheckUpdateHour(event: any): void {
    let newHour = +event.target.value;
    if (newHour > 23) {
      newHour = 23;
    }
    if (newHour < 0) {
      newHour = 0;
    }

    this._handleUpdateHour(newHour);
  }

  private _handleCheckUpdateMinute(event: any): void {
    let newMinute = +event.target.value;
    if (newMinute > 59) {
      newMinute = 59;
    }
    if (newMinute < 0) {
      newMinute = 0;
    }

    this._handleUpdateMinute(newMinute);
  }

  private _handleUpdateHour(hour: number): void {
    const newCurrentAlarm = JSON.parse(JSON.stringify(this.currentAlarm!!));
    newCurrentAlarm.hour = hour;
    this.currentAlarm = newCurrentAlarm;
  }

  private _handleUpdateMinute(minute: number): void {
    const newCurrentAlarm = JSON.parse(JSON.stringify(this.currentAlarm!!));
    newCurrentAlarm.minute = minute;
    this.currentAlarm = newCurrentAlarm;
  }

  private _handleToggleDay(indexDay: number): void {
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
    const newCurrentAlarm = JSON.parse(JSON.stringify(this.currentAlarm!!));
    newCurrentAlarm[day] = !newCurrentAlarm[day];
    this.currentAlarm = newCurrentAlarm;
  }

  private _handleBack(): void {
    this.currentAlarm = null;
    this.currentAlarmIndex = null;
    this.edit = false;
  }

  private _handleDelete(): void {
    const newAlarms = this._getAlarms().slice();
    const indexes = this.selectedAlarmIndex.sort().reverse();
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      newAlarms.splice(index, 1);
    }
    this.selectedAlarmIndex = [];
    this._setAlarms(newAlarms);
  }

  private _handleSave(): void {
    const currentAlarm = this.currentAlarm;
    const newAlarms = this._getAlarms().slice();
    if (currentAlarm) {
      newAlarms[this.currentAlarmIndex!!] = currentAlarm;
    }
    this._setAlarms(newAlarms);
    this.currentAlarm = null;
    this.currentAlarmIndex = null;
    this.edit = false;
  }

  private _parseDays(alarm: Alarm): string {
    const days = [alarm.monday, alarm.tuesday, alarm.wednesday, alarm.thursday, alarm.friday, alarm.saturday, alarm.sunday];
    if (days.every(x => !x)) {
      return 'Demain';
    } else if (days.every(x => !!x)) {
      return 'Tout les jours';
    } else {
      return days
        .map((value, index) => {
          if (value) {
            switch (index) {
              case 0:
                return 'Lun';
              case 1:
                return 'Mar';
              case 2:
                return 'Mer';
              case 3:
                return 'Jeu';
              case 4:
                return 'Ven';
              case 5:
                return 'Sam';
              case 6:
                return 'Dim';
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
      .deg02 { transform: translate(70px); }
      .deg302 { transform: rotate(30deg) translate(70px) rotate(-30deg); }
      .deg602 { transform: rotate(60deg) translate(70px) rotate(-60deg); }
      .deg902 { transform: rotate(90deg) translate(70px) rotate(-90deg); }
      .deg1202 { transform: rotate(120deg) translate(70px) rotate(-120deg); }
      .deg1502 { transform: rotate(150deg) translate(70px) rotate(-150deg); }
      .deg1802 { transform: rotate(180deg) translate(70px) rotate(-180deg); }
      .deg2102 { transform: rotate(210deg) translate(70px) rotate(-210deg); }
      .deg2402 { transform: rotate(240deg) translate(70px) rotate(-240deg); }
      .deg2702 { transform: rotate(270deg) translate(70px) rotate(-270deg); }
      .deg3002 { transform: rotate(300deg) translate(70px) rotate(-300deg); }
      .deg3302 { transform: rotate(330deg) translate(70px) rotate(-330deg); }

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
