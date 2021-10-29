'use strict'

const assert = require('assert')
const flush = require('.')

beforeEach(flush)

describe('flush-cache', function () {
  it('should count', function () {
    const fixture = require('./fixture')

    assert.strictEqual(fixture(), 0)
    assert.strictEqual(fixture(), 1)
  })

  it('should have a fresh object', function () {
    const fixture = require('./fixture')

    assert.strictEqual(fixture(), 0)
  })
})
