import Index from "../EventBus/index.js";
class Block {
    constructor(tagName = 'div', props) {
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
        };
        const eventBus = new Index();
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
            this._componentDidUpdate(oldProps, newProps);
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
    componentDidMount(_oldProps) { }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
            return true;
        }
        else {
            return false;
        }
    }
    componentDidUpdate(_oldProps, _newProps) {
        return true;
    }
    get element() {
        return this._element;
    }
    mount() { }
    _mount() {
        this.mount();
    }
    _render() {
        this._element.innerHTML = this.render();
        this.eventBus.emit(Block.EVENTS.MOUNT);
    }
    render() { }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        if (props) {
            return new Proxy(props, {
                get(target, prop) {
                    const value = target[prop];
                    return typeof value === "function" ? value.bind(target) : value;
                },
                set(target, prop, value) {
                    target[prop] = value;
                    self.eventBus.emit(Block.EVENTS.FLOW_CDU, Object.assign({}, target), target);
                    return true;
                },
                deleteProperty() {
                    throw new Error('Нет доступа');
                }
            });
        }
        return this.props;
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    show() {
        this.getContent().style.display = 'block';
    }
    hide() {
        this.getContent().style.display = 'none';
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
    MOUNT: 'mount'
};
export default Block;
