import EventBus from "./eventBus";
import { Events, TemplatePropsContext } from "../types/index"

class Block {
  static EVENTS: Events = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
    MOUNT: 'mount'
  };

  _element: HTMLElement;
  _meta: TemplatePropsContext

  eventBus: EventBus;
  props: TemplatePropsContext;

  constructor(tagName: string = 'div', props?: TemplatePropsContext) {
    const eventBus: EventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);
    this.eventBus = (() => eventBus)();

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, (oldProps: TemplatePropsContext, newProps: TemplatePropsContext): any => {
      this._componentDidUpdate(oldProps, newProps)
    });
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.MOUNT, this._mount.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(_oldProps?: TemplatePropsContext) { }

  _componentDidUpdate(oldProps: TemplatePropsContext, newProps: TemplatePropsContext): boolean {
    const response: boolean = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(_oldProps?: TemplatePropsContext, _newProps?: TemplatePropsContext): boolean {
    return true;
  }

  setProps = (nextProps?: TemplatePropsContext) => {
    if (!nextProps) {
      return;
    }

    <any>Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  mount() { }

  _mount() {
    // console.log(this._element.querySelector('.loginButton'))
    this.mount();
  }

  _render() {
    this._element.innerHTML = this.render();
    // this._mount()
    this.eventBus.emit(Block.EVENTS.MOUNT);
  }

  render(): string | any { }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props?: TemplatePropsContext) {
    const self = this;

    if (props) {
      return new Proxy(props, {
        get(target: TemplatePropsContext, prop: string) {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target: TemplatePropsContext, prop: string, value) {
          target[prop] = value;
          self.eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
          return true;
        },
        deleteProperty() {
          throw new Error('Нет доступа');
        }
      })
    }

    return this.props;
  }

  _createDocumentElement(tagName: any) {
    return document.createElement(tagName);
  }

  show(): void {
    this.getContent().style.display = 'block'
  }

  hide(): void {
    this.getContent().style.display = 'none'
  }
}

export default Block;

