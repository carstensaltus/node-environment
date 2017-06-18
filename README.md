# @altus/node-env

[![Build Status](https://travis-ci.org/carstensaltus/node-environment.svg?branch=master)](https://travis-ci.org/carstensaltus/node-environment) [![Code Climate](https://codeclimate.com/github/carstensaltus/node-environment/badges/gpa.svg)](https://codeclimate.com/github/carstensaltus/node-environment) [![Test Coverage](https://codeclimate.com/github/carstensaltus/node-environment/badges/coverage.svg)](https://codeclimate.com/github/carstensaltus/node-environment/coverage) [![Issue Count](https://codeclimate.com/github/carstensaltus/node-environment/badges/issue_count.svg)](https://codeclimate.com/github/carstensaltus/node-environment)

A node environment helper module.

- documentation find a new markup compiler
- pr should have pr branch in current branch
- import * issue -
- check tslint if fails, everything should stop
- npm version update on git tag
- travis deploy on version change
- do license

## Install

```
npm install @altus/node-env --save
```

## Quick start

### Load an environment file

```
// Import the package
import * as env from '@altus/node-env';

// Import/load environment file
if (!env.load('/path/to/.env')) {
    console.log('Could not find environment file!');
}
```

### Set and get variables:

```
// Set environment variable
env.var('APP_NAME', 'MyFirstApp');

// Get environment variable
env.var('APP_NAME');
```

## Read More

1. [Documentation](./dist/docs/node-env.md)

## Contributors

```
_> npm install
_> typings install

// Build the project files
_> npm run build

// Watch and build project files while coding
_> npm run watch

_> npm run coverage
_> npm run test
```
