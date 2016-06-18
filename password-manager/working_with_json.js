var person = {
    name: 'Shekar',
    age: 28
}
var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

console.log('=======Challenge Area======');

var animal = '{"name": "Halley"}';

//Convert animal to js object
var animalObject = JSON.parse(animal);

//add age group
animalObject['age'] = 28;
//or
animalObject.age = 28;

// convert back to JSON
var animalJSON = JSON.stringify(animalObject);

// log out
console.log(animalJSON);
console.log(typeof animalJSON);

