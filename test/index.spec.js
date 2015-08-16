var expect = require('expect')
var dgrp = require('../index')
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
  describe('Checking an empty directory not under source control', function () {
    it ('should return a `not a dokku app` error', function (done) {
      dgrp(__dirname + '/fake-app2', function (err, host, appName) {
        expect(err).toBeAn(Error)
        expect(err.message).toBe('No Dokku app detected')
        expect(host).toNotExist()
        expect(appName).toNotExist()
        done()
      })
    })
  })
  describe('Checking a git repo directory that is not a dokku app', function () {
    it ('should return a `not a dokku app` error', function (done) {
      dgrp(function (err, host, appName) {
        expect(err).toBeAn(Error)
        expect(err.message).toBe('No Dokku app detected')
        expect(host).toNotExist()
        expect(appName).toNotExist()
        done()
      })
    })
  })
  describe('Checking a directory that is a dokku app', function () {
    it ('should return dokku host and appName', function (done) {
      dgrp(__dirname + '/fake-app', function (err, host, appName) {
        expect(err).toBe(null)
        expect(host).toBe('test.com')
        expect(appName).toBe('test')
        done()
      })
    })
  })
})
