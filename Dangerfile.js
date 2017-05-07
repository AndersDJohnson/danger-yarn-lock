var checkYarkLock = require('./index')

schedule(function (resolved) {
  checkYarkLock(function (err, message) {
    warn(message)
    resolved()
  })
})

// schedule(function (resolved) {
//   checkYarkLock()
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
//   Promise.all([promise, checkYarkLock()])
//     .then(function (results) {
//       warn(results[1])
//       resolved()
//     })
// })
