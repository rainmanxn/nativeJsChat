// @ts-nocheck
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { fake } from 'sinon';
import Block from "../../static/dist/lib/block.js";

let testElement;

describe('Component', () => {
  before(() => {
    const { window } = new JSDOM('<!DOCTYPE html>');

    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
    global.compile = window.Handlebars;

    testElement = document.createElement('div');
    testElement.textContent = 'Hello'
    global.queueMicrotask = fake((fn) => fn());
  });

  it('checking render and getContent', () => {
    const component = new class MyComponent extends Block {
      render() {
        return testElement.innerHTML;
      }
    };
    expect(component.getContent().innerHTML).to.equal(testElement.innerHTML);
  });

  it('checking componentDidMount', () => {
    const fakeFn = fake();
    expect(fakeFn.callCount).to.equal(0);

    const component = new class MyComponent extends Block {
      componentDidMount() {
        fakeFn();
      };
    };
    component.getContent();
    expect(fakeFn.callCount).to.equal(1);
  });
});