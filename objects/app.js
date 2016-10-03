//object literal

var person = {
    firstname: 'Jason',
    lastname: 'Luong',
    greet: function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();
console.log(person['firstname']);