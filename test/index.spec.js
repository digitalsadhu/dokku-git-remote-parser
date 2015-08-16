var expect = require('expect')
var gr = require('../index')
var cp = require('child_process')

describe('dokku git remote parser module', function () {
  before(function () {
    cp.execSync('mkdir ./fake-app', {cwd: __dirname})
    cp.execSync('mkdir ./fake-app2', {cwd: __dirname})
    cp.execSync('git init', {cwd: __dirname + '/fake-app'})
    cp.execSync('git init', {cwd: __dirname + '/fake-app2'})
    cp.execSync('git remote add origin git@test.com:test/test', {cwd: __dirname + '/fake-app'})
    cp.execSync('git remote add dokku dokku@test.com:test', {cwd: __dirname + '/fake-app'})
  });
  after(function () {
    cp.execSync('rm -r ./fake-app', {cwd: __dirname})
    cp.execSync('rm -r ./fake-app2', {cwd: __dirname})
  });
  describe('', function () {
    it ('', function (done) {
      done()
    })
  })
})
