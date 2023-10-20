// mdooule.exports property decides which variable can be used in another file
const people = ['sakib', 'tamim', 'mahmudullah'];
const a = 6;
function test() {
  console.log('test');
}
module.exports = {
    people,
    alias: a,
    test: test
}

// console.log(require);

// how the iffe works as a module wrapper ...
// the whole things will be wrapped up with an iffe
// module wrapper function
// (function(require, module, exports = {}, __dirname, __filename, global){
//     const people = ['sakib', 'tamim', 'mahmudullah'];
//     var a = 6;
//     function test(){
//         console.log('test');
//     }
//     module.exports = people;
// return module.exports;
// })();

// how to use a variable as a value of a property of an object
// const x = 10;
// const obj = {
//     x: x,
// };
// console.log(obj);



