//require('./greet1') requires module.exports, not exports
var greet1 = require('./greet1');
//greet1();

var greet2 = require('./greet2');
greet2.greet();

//TL:DR
//exports is just shorthand of modeul.exports
//ALWAYS USE module.exports, it has less pitfalls
