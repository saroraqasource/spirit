var exec = require('child_process').exec
var test = require('tape')
var path = require('path')
var cwd = process.cwd()
var execPath = path.join(cwd, 'bin', 'npm-run-series')

test('Bin runs scripts', function (t) {
  t.plan(3)
  exec(`node ${execPath} "echo1" "echo2"`, function (err, stdout, stderr) {
    t.error(err, 'Did not throw an error')
    t.ok(stdout.indexOf('check for this first string') > -1, 'Executed first script')
    t.ok(stdout.indexOf('check for this second string') > -1, 'Executed second script')
  })
})

test('bin throws an error and exits on first error', function (t) {
  t.plan(3)
  exec(`node ${execPath} "error" "one"`, function (err, stdout, stderr) {
    t.ok(err, 'Threw an error')
    t.equal(err.code, 1, 'Error code correct')
    t.ok(err.message.indexOf('command "npm run error" exited with wrong status code "1"') > -1, 'Passed error message')
  })
})
