import { LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'alarm-clock-card-editor': LovelaceCardEditor;
  }
}

export interface AlarmClockCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity?: string;
  test_gui?: boolean;
  alarm_clock_id: string;
}

export interface Alarm {
  hour: number;
  minute: number;
  enabled: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}
