# danger-yarn-lock
> [Danger] check that yarn.lock is updated with package.json dependencies.

Alternatively, look at `yarn check` or `yarn install --frozen-lockfile`.

## Install
```
yarn add -D danger-yarn-lock
```

## Use

In your `Dangerfile.js`:
```js
var checkYarnLock = require('danger-yarn-lock')

schedule(function (resolved) {
  checkYarnLock(function (err, message) {
    if (err) throw err
    warn(message)
    resolved()
  })
})
```

Or with promise:
```js
var checkYarnLock = require('danger-yarn-lock')

schedule(function (resolved) {
  checkYarnLock()
    .then(function (message) {
      warn(message)
      resolved()
    })
})
```

Combine with other promises:
```js
var checkYarnLock = require('danger-yarn-lock')

var promise = danger.git.JSONDiffForFile('other-file.txt')
  .then(function () {
    return 'ok'
  })

schedule(function (resolved) {
  Promise.all([promise, checkYarnLock()])
    .then(function (results) {
      warn(results[1])
      resolved()
    })
})
```

## Etc.

If you want to catch this from within npm scripts (e.g. `preinstall`), try [https://github.com/AndersDJohnson/use-yarn](https://github.com/AndersDJohnson/use-yarn).

[danger]: http://danger.systems/js/
