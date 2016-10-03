//immediately invoked function expression
var firstname = 'Son';

(function(lastname) {
    var firstname = 'Jason';
    console.log(firstname);
    console.log(lastname);
}('Luong'));


console.log(firstname);
