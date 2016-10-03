// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first-class, so I can pass a function to a function
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('hello world');
}

greetMe();

// first-class function expression
logGreeting(greetMe);

// use function expression on the fly
logGreeting(function() {
    console.log('hi world');
})