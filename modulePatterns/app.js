var greet1 = require('./greet1');

greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3a = require('./greet3');
greet3a.greet();
greet3a.greeting = "Hola mundo";

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

//revealing module pattern
var greet5 = require('./greet5');
greet5.greet();