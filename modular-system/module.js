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
const people = require('./people');
const _ = require('lodash');
console.log(_.last(people.people));