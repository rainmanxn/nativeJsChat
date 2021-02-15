import { afterEach, beforeEach, describe, it } from 'mocha'
import { assert } from 'chai'
import isEqual from '../utils/isEqual.js'
import Fetch from "../lib/HTTP/index.js";

const sinon = require('sinon')
const url = 'https://fake.com/'
const data = { id: 1, data: 'Hello' }

describe('httpExecutor', function () {
  beforeEach('Запускаем сервер', function () {
    this.server = sinon.createFakeServer()
    this.server.autoRespond = true
  })

  afterEach('Глушим сервер', function () {
    this.server.restore()
  })

  it('GET RESPONSE 200', function () {
    this.server.respondWith('GET', '*',
      [200, { 'Content-Type': 'application/json' },
        JSON.stringify(data)])
    return Fetch
      .get(url)
      .then((res) => {
        assert.equal(res.status, 200)
        assert.equal(isEqual(res.response, JSON.stringify(data)), true)
      }).catch((_err) => {
        assert.fail(null, null, 'Должен был отработать блок then')
      })
  })

  it('POST RESPONSE 200', function () {
    this.server.respondWith('POST', '*',
      [200, { 'Content-Type': 'application/json' },
        JSON.stringify(data)])
    return Fetch
      .post(url)
      .then((res) => {
        assert.equal(res.status, 200)
        assert.equal(isEqual(res.response, JSON.stringify(data)), true)
      }).catch((_err) => {
        assert.fail(null, null, 'Должен был отработать блок then')
      })
  })
})