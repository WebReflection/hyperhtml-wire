# hyperhtml-wire

[![Build Status](https://travis-ci.com/WebReflection/hyperhtml-wire.svg?branch=master)](https://travis-ci.com/WebReflection/hyperhtml-wire) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/hyperhtml-wire/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/hyperhtml-wire?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

The persistent fragment like class used in [hyperHTML](https://github.com/WebReflection/hyperHTML).

This is particularly useful with [domdiff](https://github.com/WebReflection/domdiff) so it's been extracted from _hyperHTML_ itself..

```js
import Wire from 'hyperhtml-wire';

const wire = new Wire(document.body.querySelectorAll('*'));

wire.firstChild;    // first body element
wire.lastChild;     // last body element
wire.childNodes;    // an array of initial nodes
wire.ownerDocument; // the document of the first child

wire.remove(true);  // remove all but first node (domdiff friendly)
wire.remove(false); // remove all nodes

wire.valueOf(true); // force nodes to be re-appended to a fragment
wire.valueOf(false);// returns fragment with nodes only if not appended

```
