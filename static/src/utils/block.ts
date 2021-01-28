import EventBus from "./eventBus.js";
import { Events } from "../types/index.js"

class Block {
  static EVENTS: Events = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _element: HTMLElement = null;
  _meta = null;

  eventBus: EventBus;
  props: any;

  constructor(tagName: String = "div", props: any = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = (() => eventBus)();

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, (oldProps, newProps) => {
      this._componentDidUpdate(oldProps, newProps)
    });
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
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

  componentDidMount(oldProps?) {}

  _componentDidUpdate(oldProps, newProps): boolean {
    const response = this.componentDidUpdate(oldProps, newProps);
    if(response){
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(oldProps, newProps): boolean {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    this._element.innerHTML = this.render();
  }

  render(): string | any {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop){
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value){
        target[prop] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      }
    })
  }

  _createDocumentElement(tagName) {
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
