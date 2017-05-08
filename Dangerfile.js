/* global schedule, warn */
var checkYarnLock = require('./index')

schedule(function (resolved) {
  checkYarnLock(function (err, message) {
    if (err) throw err
    warn(message)
    resolved()
  })
})

// schedule(function (resolved) {
//   checkYarnLock()
//     .then(function (message) {
//       warn(message)
//       resolved()
//     })
// })

// var promise = danger.git.JSONDiffForFile('package.json')
//   .then(function () {
//     return 'ok'
//   })
//
// schedule(function (resolved) {
//   Promise.all([promise, checkYarnLock()])
//     .then(function (results) {
//       warn(results[1])
//       resolved()
//     })
// })
