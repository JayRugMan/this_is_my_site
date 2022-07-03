/* My JS Practice */
// Strnigs, number boolean null undefined symbol

const name = 'jason';
const age = 37;

const hello = `My name is ${name} and I am ${age} years old.`;

console.log("My name is " + name + " and I am " + age);
console.log(hello);
console.error('false error');
console.warn('false warning');


// properties and methonds

const s = 'Hello World';
const s2 = s.split(' ');

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(s.split(' '));
console.log(s.substring(0, 5).toUpperCase() + ' ' + s2[1]);


// Arrays

const numbers = new Array(1,1,2,3,5);
const fruit = ['apples', 'bananas', 'dragons']

console.log(numbers);
console.log(fruit);
console.log(`${fruit[1]} are fruit`);

fruit[3] = 'cherries';

console.log(fruit);

fruit.push('grapes');

console.log(fruit);

fruit.unshift('blackberries');

console.log(fruit);
console.log(`${fruit[1]} are fruit`);

fruit.pop();

console.log(fruit);
console.log(fruit.indexOf('dragons'));