//object properties and methods

var obj = {
  greet: 'Hello'
}

//all the same output
console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

//functions and arrays
var arr = [];

//add to array

//pushing function into array
arr.push(function() {
  console.log('Hello world 1');
});

arr.push(function() {
  console.log('Hello world 2');
});

arr.push(function() {
  console.log('Hello world 3');
});

//loop array
//item contains the items in the array. i.e. the functions
arr.forEach(function(item) {
  item();
})
