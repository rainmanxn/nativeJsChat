import EventBus from "./eventBus.js";

class Block {
  static EVENTS: object = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
    FLOW_ADD_EVENTS: 'flow:add-events'
  };
​
  _element = null;
  _meta = null;

  eventBus: object;
  props: object;
​
  constructor(tagName:string = 'div', props: object = {}) {
    const eventBus: object = new EventBus();
    this.eventBus = (() => eventBus)();
​
    this.props = this._makePropsProxy(props);
​
    this._meta = {
      tagName,
      props
    };
​
    this._registerEvents(eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }
​
  get element() {
    return this._element;
  }
​
  _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDU, (oldProps, newProps) =>
      this._componentDidUpdate(oldProps, newProps)
    );
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_ADD_EVENTS, this.addEvents.bind(this));
  }
​
  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }
​
  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }
​
  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
      return true;
    }
    return false;
  }
​
  _render() {
    if (this._element) {
      this._element.innerHTML = this.render();
      // setTimeout(() => {
      this.eventBus.emit(Block.EVENTS.FLOW_ADD_EVENTS);
      // }, 0);
    }
  }
​
  _makePropsProxy(props) {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      }
    });
  }
​
  _createDocumentElement(tagName) {
    return document.createElement(tagName);
  }
​
  setProps = nextProps => {
    if (!nextProps) {
      return;
    }
​
    Object.assign(this.props, nextProps);
  };
​
  getContent() {
    return this.element;
  }
​
  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }
​
  render() {}
​
  addEvents() {}
​
  componentDidMount(oldProps) {}
​
  componentDidUpdate(oldProps, newProps) {
    return true;
  }
​
  show() {
    this.getContent().style.display = 'block';
  }
​
  hide() {
    this.getContent().style.display = 'none';
  }
}

export default Block;
