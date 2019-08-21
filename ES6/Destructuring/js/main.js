// Examples

// Destructuring Objects

const user = {
  name: "James",
  lastname: "Jones",
  age: 25
};

// const { name, lastname, age } = user;

// console.log(name);
// console.log(lastname);
// console.log(age);

const message = ({ name, lastname, age }) => {
  console.log(`My name is ${name} ${lastname}, age ${age}`);
};

message(user);

// Destructuring Arrays

const cars = ["camaro", "nova", "A4"];

const [camaro, nova, A4] = cars;

// const [camaro, ...rest] = cars;

console.log(camaro);
// console.log(rest);

const users = [
  { name: "Francis", lastname: "Jones", age: 25 },
  { name: "Martha", lastname: "Smith", age: 20 },
  { name: "Helen", lastname: "Neron", age: 16 }
];

const [{ lastname }] = users;

console.log(lastname);

const anotherUsers = {
  names: ["Francis", "Martha", "Ray"]
};

const {
  names: [name1, name2]
} = anotherUsers;

console.log(name2);

//Destructuring function arguments

function createCar({ brand, model, color, type, year }) {
  
}

const car = {
  brand: "Ford",
  model: "Focus",
  color: "red",
  year: "2015",
  type: "fast"
};

createCar(car);
