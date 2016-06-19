function greetMaker(name) {
    function greet() {
        console.log("Hello " + name);
    }
    return greet;
}

var greetShekar = greetMaker('Shekar');
greetShekar();

var greetWorld = greetMaker('World');
greetWorld();

//Challenge
function createAdder(baseNumber) {
    function add(numberToAdd) {
        return baseNumber+numberToAdd;
    }
    return add;
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
