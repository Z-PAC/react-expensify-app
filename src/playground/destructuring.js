/*
  Object destructuring
*/

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

// One (boring) way to do it
// const name = person.name;
// const age = person.age;

// Now with ES6 destructuring
const {name = 'Anonymous', age} = person;  // <-- default fallback in 'name'

console.log(`${name} is ${age}.`);

// Waaay too verbose
// if(person.location.city && person.location.temp){
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }

// Much better :)
const {city, temp: temperature } = person.location; // <-- naming yntax
if(city && temperature){
  console.log(`It's ${temperature} in ${city}.`);
}

// const {name: firstName = 'Anonymous'} // <-- fallback + naming

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);

/*
  Array destructuring
*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city2, state = 'New York'] = address;

console.log(`You are in ${city2}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , priceMedium] = item;
console.log(`A medium ${itemName} costs ${priceMedium}`);