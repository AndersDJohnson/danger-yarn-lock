# danger-yarn-lock
> [Danger] check that yarn.lock is updated with package.json dependencies.

## Install
```
yarn add -D danger-yarn-lock
```

## Use
In your `Dangerfile.js`:
```js
var checkYarkLock = require('danger-yarn-lock')

schedule(function (resolved) {
  checkYarkLock(function (message) {
    warn(message)
    resolved()
  })
})
```

Or with promise:
```js
var checkYarkLock = require('danger-yarn-lock')

schedule(function (resolved) {
  checkYarkLock()
    .then(function (message) {
      warn(message)
      resolved()
    })
})
```

Combine with other promises:
```js
var checkYarkLock = require('danger-yarn-lock')

var promise = danger.git.JSONDiffForFile('other-file.txt')
  .then(function () {
    return 'ok'
  })

schedule(function (resolved) {
  Promise.all([promise, checkYarkLock()])
    .then(function (results) {
      warn(results[1])
      resolved()
    })
})
```

## Etc.

If you want to catch this from within npm scripts (e.g. `preinstall`), try [https://github.com/AndersDJohnson/use-yarn](https://github.com/AndersDJohnson/use-yarn).

[danger]: http://danger.systems/js/
