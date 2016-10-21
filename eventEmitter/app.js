//Custom event emitter
/*
var Emitter = require('./emitter');

var emtr = new Emitter();
//'greet' is a 'magic string' code smell, this is corrected in the Node event emitter
emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
*/

//Node event emitter
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);
