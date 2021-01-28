export interface Events {
  INIT: string,
  FLOW_CDM: string,
  FLOW_CDU: string,
  FLOW_RENDER: string,
}

export type TemplatePropsContext = {
  tagName: string;
  [key: string]: unknown;
};