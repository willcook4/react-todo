
function add(a, b) {
  return a + b;
}

console.log(add(3,1));

// ... Spread Operator

var toAdd = [9, 5];

add(toAdd[0], toAdd[1]);
console.log(add(...toAdd));

//------------

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];

// Combining arrays
var final = [...groupB ,3, ...groupA];
console.log(final);
// Produces:
// [ 'Vikram', 3, 'Jen', 'Cory' ]

//-------------------------


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Produce: 'Hi Andrew, you are 25'

var product = function(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
};

product(...person);
product(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew'];
// Produce: 'Hi Andrew'

var arrayOfNames = [...names, ...final];
arrayOfNames.forEach((name) => {
  console.log("Hi " + name + '!');
});
