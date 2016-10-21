function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {
  //make sure 'type' is an array, if not, then create it as an array
  this.events[type] = this.events[type] || [];
  //push event function 'listener' into 'type' array
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  //check if 'type' is an event in the 'type' array
  if (this.events[type]) {
    //loop through 'type' array and execute functions it contains
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
