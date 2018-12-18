console.log('app started');
const _ = require('lodash');
const futil = require('futil-js');
const notes = require('./data/notes');
const Finance = require('financejs');
const finance = new Finance();

// notes.removeNote('test note 2');
// notes.addNote();

// console.log(notes.listNotes());

// var flipped = _.flip(function() {
//     return _.toArray(arguments)
// });
// console.log(flipped('c','b','a'));

// let cmplx = { a: { b: { c: 1, d: { x:77 }} } };
// console.log(futil.flattenObject(cmplx));

// let arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(_.flattenDeep(arr2));

// let x = { a: "a-prop", b: { subprop: "b-sub-prop", supersubprop: { c: 3 } } };
// console.log(_.hasIn(x,'b.supersubprop.c'));

console.log(finance.CI(4.3, 4, 1500, 6 ));
console.log(finance.AM(429000, 3.75, 30, 0));
console.log(finance.R72(5));