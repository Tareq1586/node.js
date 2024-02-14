// requiring a file
// const people = require('./people');
// console.log(people);

// this will cause an error because people is not defined
// const people2 = require('./people');
// console.log(people);

//
// const people = require('./people');
// console.log(people.people);
// console.log(people.alias);
// people.test();

// practical use of modular system
const _ = require('lodash');
const people = require('./people');

console.log(_.last(people.people));
