'use strict';

var t = require('unit.js');
var pluriel = require('./');


t.assert(pluriel('test') === 'tests');
t.assert(pluriel('chou') === 'choux');
t.assert(pluriel('poireau') === 'poireaux');
t.assert(pluriel('ananas') === 'ananas');
t.assert(pluriel('cheval') === 'chevaux');
t.assert(pluriel('spiral') === 'spiraux');
t.assert(pluriel('bail') === 'baux');
t.assert(pluriel('éventail') === 'éventails');
t.assert(pluriel('héro') === 'héros');
t.assert(pluriel('tracteur agricole') === 'tracteurs agricoles');