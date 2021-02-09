import { TemplatePropsContext, ListenerType } from "../types/index.js"

class EventBus {
  listeners: ListenerType;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (oldProps: TemplatePropsContext, newProps: TemplatePropsContext) => boolean): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: void): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string, ...args: any[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: Function): void {
      listener(...args);
    });
  }
}

export default EventBus;
