//exports no longer points to the same object as module.exports
exports = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);
