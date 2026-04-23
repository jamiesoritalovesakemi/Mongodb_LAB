// Step 2: Practice Array Destructuring

const numbers = [10, 20, 30, 40];

// Basic destructuring
const [a, b] = numbers;
console.log('Basic array destructuring:', a, b); // 10 20

// Skipping elements
const [first, , third] = numbers;
console.log('Skipping elements:', first, third); // 10 30

// Assigning to variables with different names
const [num1, num2] = numbers;
console.log('Different variable names:', num1, num2); // 10 20

// Step 3: Practice Object Destructuring

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

// Basic destructuring
const { name, age } = person;
console.log('Basic object destructuring:', name, age); // Alice 25

// Destructuring with different variable names
const { name: personName, city: location } = person;
console.log('Renamed variables:', personName, location); // Alice New York

// Step 4: Use Advanced Destructuring

const user = {
  id: 1,
  info: {
    firstName: 'John',
    lastName: 'Doe'
  },
  preferences: {
    color: 'blue'
  }
};

// Nested destructuring with default values and renaming
const {
  id,
  info: { firstName, lastName: surname },
  preferences: { color = 'red' } // default value if missing
} = user;

console.log('Nested destructuring:', id, firstName, surname, color); // 1 John Doe blue

// Default value for missing property
const { country = 'USA' } = person;
console.log('Default value for missing property:', country); // USA

// Step 5: Use Destructuring in Functions

// Function with destructuring in parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const userObj = { name: 'Bob', age: 30, city: 'LA' };
displayUser(userObj); // Name: Bob, Age: 30

// Function with nested destructuring
function displayCoordinates({ coords: { lat, lng } }) {
  console.log(`Latitude: ${lat}, Longitude: ${lng}`);
}

const locationData = { coords: { lat: 40.7128, lng: -74.006 } };
displayCoordinates(locationData); // Latitude: 40.7128, Longitude: -74.006