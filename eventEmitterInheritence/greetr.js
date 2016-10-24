'use strict';

var EventEmitter = require('events');
var eventConfig = require('./config');

// ES6 syntax
module.exports = class Greetr extends EventEmitter { // extends === util.inherits
  constructor() {
    super(); // same as EventEmitter.call(this)
    this.greeting = "Hello world!";
  }

  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit(eventConfig.GREET, data);
  }
}
