require('basichtml').init();

var Wire = require('../cjs');
var nodes = [
  document.createElement('p'),
  document.createElement('span'),
  document.createElement('div')
];

var wire = new Wire(nodes);

console.assert(wire.first === nodes[0], 'correct first');
console.assert(wire.last === nodes[2], 'correct last');

var fragment = wire.valueOf(false);
console.assert(fragment.nodeType === 11, 'valid fragment');
console.assert(fragment.childNodes.length === nodes.length, 'valid fragment nodes');

document.body.appendChild(fragment);

console.assert(fragment.childNodes.length === 0, 'fragment nodes appended');
fragment = wire.valueOf(false);
console.assert(fragment.childNodes.length === 0, 'fragment nodes still appended');
fragment = wire.valueOf(true);
console.assert(fragment.childNodes.length === nodes.length, 'fragment nodes regained');

document.body.appendChild(fragment);
wire.remove(false);
console.assert(document.body.childNodes.length === 0, 'all nodes removed');

document.body.appendChild(wire.valueOf(true));
wire.remove(true);
console.assert(document.body.childNodes.length === 1, 'all nodes but one removed');

wire = new Wire(nodes.slice(1));
document.body.appendChild(wire.valueOf(true));
wire.remove(false);
console.assert(document.body.childNodes.length === 0, 'two nodes removed');

document.body.appendChild(wire.valueOf(true));
wire.remove(true);
console.assert(document.body.childNodes.length === 1, 'one node removed');
