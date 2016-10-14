//exports has been mutated by added .greet
exports.greet = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);
