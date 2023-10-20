// event module
// const EventEmitter = require('events');

// const emitter = new EventEmitter();
// // register a listener for bellRing event
// emitter.on('bellRing', () => {
//   console.log('We need to run');
// });
// // raise an evennt
// setTimeout(() => {
//   emitter.emit('bellRing');
// }, 2000);

// async way
// const EventEmitter = require('events');

// const emitter = new EventEmitter();
// emitter.on('bellRing', () => {
//   console.log('We need to run');
// });
// setTimeout(() => { emitter.emit('bellRing'); }, 2000);

// we can not raise an event before register a listener on it
// const EventEmitter = require('events');

// const emitter = new EventEmitter();
// // raise an event
// emitter.emit('bellRing');
// // register a istener for bellRing event
// emitter.on('bellRing', () => {
//   console.log('We need to run');
// });

// real life example of event module
const School = require('./school');

const school = new School();
// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}`);
});
school.startPeriod();
