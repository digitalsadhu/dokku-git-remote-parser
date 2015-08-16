dokku-git-remote-parser
=======================

[![NPM](https://nodei.co/npm/dokku-git-remote-parser.png?compact=true)](https://npmjs.org/package/dokku-git-remote-parser)
[![Build Status](https://travis-ci.org/digitalsadhu/dokku-git-remote-parser.svg?branch=master)](https://travis-ci.org/digitalsadhu/dokku-git-remote-parser)

Retrieves dokku host and app name from a directory by reading and parsing
the git remotes

## Installation

```
npm install dokku-git-remote-parser
```

## Usage

Require module
```js
var dokkuGitRemoteParser = require('dokku-git-remote-parser');
```

use module on current directory
```js
dokkuGitRemoteParser(function (err, host, appName) {
  // err: Error object or null
  //   eg. err.message -> "No Dokku app detected"
  // host: string or undefined eg. "myhost.com"
  // appName: string or undefined eg. "my-app"
})
```

user module on a specified directory
```js
dokkuGitRemoteParser('./path/to/dir', function (err, host, appName) {

})
```
