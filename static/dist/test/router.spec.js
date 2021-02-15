import { assert } from 'chai'
import { describe, it, afterEach } from 'mocha'
import { Router } from '../lib/Router/Router.js'
import Block from "../lib/Block/index.js";

const getRouter = () => {
  const router = new Router('.app')
    .use('/', getEmptyComponent())
    .use('/path1', getEmptyComponent())
    .use('/path2', getEmptyComponent())
  router.start()
  return router
}

const createRouter = (selector, needNew = false) => {
  if (needNew) {
    Router.__instance = undefined;
  }
  return new Router(selector);
};

const getEmptyComponent = () => {
  class Component extends Block{
    render() {
      return ''
    }
  }
  return new Component()
}

describe('Router', function () {
  it('router is singleton. should return first instance domSelector', (done) => {
    let router;
    router = createRouter('.new');
    router = createRouter('.second');
    assert.equal(router._rootQuery, '.app');
    done();
  });
  it('Роутер записывает пути', function () {
    const router = getRouter()
    assert.equal(router.routes.length, 3)
  })
})
