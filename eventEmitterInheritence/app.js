var EventEmitter = require('events');
var util = require('util');
var eventConfig = require('./config');

function Greetr() {
  EventEmitter.call(this); //equivalent to super constructor
  this.greeting = "Hello world!";
}

// inherit props of EventEmitter into Greetr
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit(eventConfig.GREET, data);
}

var greeter1 = new Greetr();

// Greetr is able to use '.on', which is a prop of EventEmitter
// this is because of line 10
greeter1.on(eventConfig.GREET, function(data) {
  console.log("Someone greeted!: " + data);
  console.log(`Someone greeted: ${data}`); //ES6 syntax
})

greeter1.greet("Jason");
