# flush-cache
Flushes the internal node cache, useful (and recommended) when testing apps.

The node cache itself is useful and often needed, but when it comes to test you
don't want to cache your modules which you are testing. This forces you to write
isolated tests, which is a good thing.

## usage
### install

We'll install and save flush-cache so we can use it locally for our tests:

```
npm i flush-cache --save-dev
```

or, if you use [yarn](https://yarnpkg.com/):

```
yarn add flush-cache --dev
```

### common

Require flush-cache and invoke the function to clear the whole cache.

something.js
```js
console.log('such logs, much wows!')
```

test.js
```js
const flush = require('flush-cache')

require('./something') // such logs, much wows!

flush()

// completely uncached & fresh object here:
require('./something') // such logs, much wows!
```

flush-cache deletes every require cache object, so when you require modules
recursively, their cache gets flushed too.

## examples
### mocha

You should add the flush method in a `beforeEach` in a `describe` or in a separate test file when you want to flush the cache in every single `it`.

```js
const flush = require('flush-cache')

beforeEach(flush)
beforeEach(function () {
  this.myObject = require('...')
})

// or put both methods in a single method

beforeEach(function () {
  flush()

  this.myObject = require('...')
})

it('should test my object', function () {
  // this.myObject is now a fresh object in every single test case!
})
```

### ava
You should add the flush method in a `beforeEach`.

```js
import test from 'ava'
import flush from 'flush-cache'

test.beforeEach(flush)
test.beforeEach(t => {
  t.context.myObject = require('...')
})

test('first', t => {
  // t.context.myObject is now a fresh object in every single test case!
})
```

## gotchas
Most modules expect the `require` command to always be cached, so some modules
may break. If you detect modules which break this module, create an issue or a
PR.

Current require caches which are ignored:
- deasync
