export interface Events {
  INIT: string,
  FLOW_CDM: string,
  FLOW_CDU: string,
  FLOW_RENDER: string,
  MOUNT: string
}

export type TemplatePropsContext = {
  [key: string]: any;
};

export type ListenerType = {
  [key: string]: any[];
};