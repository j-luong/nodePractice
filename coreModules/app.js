// checkout node API for all core files
// https://nodejs.org/api/
var util = require('util');

var name = 'Jason';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
