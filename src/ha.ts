/**
 * Minimal typings for the parts of the Home Assistant frontend object
 * model this card relies on. Intentionally loose – internals change.
 */

export interface HassAttributes {
  friendly_name?: string;
  latitude?: number | string;
  longitude?: number | string;
  radius?: number | string;
  passive?: boolean;
  entity_picture?: string;
  gps_accuracy?: number;
  [key: string]: any;
}

export interface HassState {
  entity_id: string;
  state: string;
  attributes: HassAttributes;
  last_changed?: string;
  last_updated?: string;
}

export type Unsubscribe = () => void;

export interface SubscribeMessageOptions {
  resubscribe?: boolean;
  eventTimeout?: number;
  timeout?: number;
}

export interface HAConnection {
  subscribeMessage(
    callback: (message: any) => void,
    subscribeMessage: Record<string, any>,
    options?: SubscribeMessageOptions
  ): Promise<Unsubscribe>;
}

export interface HomeAssistant {
  states: Record<string, HassState>;
  connection: HAConnection;
  themes: { darkMode: boolean; theme?: string };
  config: {
    latitude?: number;
    longitude?: number;
    elevation?: number;
    unit_system?: Record<string, string>;
    [key: string]: any;
  };
  user?: { name?: string; is_admin?: boolean };
  callService(domain: string, service: string, serviceData?: Record<string, any>): Promise<any>;
  [key: string]: any;
}
