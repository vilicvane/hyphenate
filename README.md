# Hyphenate [![Build Status](https://travis-ci.org/vilic/hyphenate.svg)](https://travis-ci.org/vilic/hyphenate)

A simple helper function that split and join words back together.

## Install

```sh
npm install hyphenate --save
```

## Usage

```ts
import hyphenate from 'hypenate';

hyphenate('hello, world!'); // "hello-world"
hyphenate('JSONDataItems'); // "json-data-items"
```

Or if you are still using plain ES5:

```ts
var hyphenate = require('hyphenate').default;
```
