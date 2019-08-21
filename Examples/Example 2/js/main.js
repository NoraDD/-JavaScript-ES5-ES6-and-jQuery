// Function statement

// function add(a, b) {
//   console.log(a + b);
// }

// add(5, 10);

// Function expression

// var sum = function(a, b) {
//   console.log(a + b);
// };

// sum(10, 15);

// Arrays

// var arr = [
//   "John",
//   "Bob",
//   "Mary",
//   10,
//   true,
//   [1, 2, 3],
//   function(name) {
//     return "Hello " + name;
//   }
// ];

// console.log(arr[6](arr[0]));

// var colors = ["white", "black", "red"];

// colors.push("blue"); //add element at the end of the array

// colors.pop(); //remove element from the end of the array

// colors.shift(); //remove element from the beginning of the array

// colors.unshift("purple"); //add element at the beginning of the array

// console.log(colors);

// Object

// var person = new Object();

// person.firstName = "John";

// person["lastname"] = "Jones";

// person.son = new Object();

// person.son.firstName = "Nick";

// person.son.age = 5;

// console.log(person);

// var person = {
//   firstName: "John",
//   lastName: "Jones",
//   daughter: {
//     name: "Mary",
//     age: 5
//   },
//   myFunc: function(daughterName, fatherName, daughterAge) {
//     console.log(
//       daughterName +
//         " is a daughter of " +
//         fatherName +
//         " and she is " +
//         daughterAge +
//         " years old"
//     );
//   }
// };

// console.log(person.daughter.age);
// person.myFunc(person.daughter.name, person.firstName, person.daughter.age);

// Loops

// var i = 0;

// while (i < 10) {
//   console.log(i);

//   i++;
// }

// var colors = ["white", "red", "green", "blue"];

// var i = 0;

// do {
//   console.log(colors[i]);

//   i++;
// } while (i < colors.length);

//Date Object

// var date = new Date();

// var year = date.getFullYear();

// var month = date.getMonth();

// date.setFullYear(1990);
// date.setMonth(11);

// console.log(date);
// console.log(year);
// console.log(month);

//Scope

// var num1 = 5;

// function a() {
//   var num2 = 10;

//   function b() {
//     var num3 = 15;
//     console.log(num3 + num2 + num1);
//   }

//   b();
// }

// a();

// var per = {
//   firstname: "John",
//   lastname: "Jones",
//   getFullname: function() {
//     console.log(this.firstname + " " + this.lastname);
//   }
// };

// per.getFullname();

// function sum(num1, num2, fn) {
//   console.log(num1 + num2);
//   console.log(fn());
// }

// function done() {
//   return "Function is executed";
// }

// sum(5, 10, done);

// Closures

// function calc(num1) {
//   var num2 = 10;

//   return function(num3) {
//     var sum = num1 + num2 + num3;
//     console.log(sum);
//   };
// }

// var add = calc(5);
// add(15);

// function a() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(function() {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// var b = a();
// b[0]();

// Call(), Apply(), Bind()

// var person = {
//   firstname: "John",
//   lastname: "Smith",
//   getFullname: function() {
//     return this.firstname + " " + this.lastname;
//   }
// };

// var definePerson = function(age, job) {
//   console.log(
//     this.getFullname() + " is " + age + " years old and he is a " + job
//   );
// };

// definePerson.call(person, 28, "developer");
// definePerson.apply(person, [30, "designer"]);

// var getPerson = definePerson.bind(person);
// getPerson(19, "student");

//let and var

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 500);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 500);
// }

//Arrow functions

// const multiply = (x, y) => x * y;
// console.log(multiply(5, 10));

// const users = () => ({ name: "John" });

// console.log(users());

// const numbers = [2, 4, 6, 8];

// let double = numbers.map(number => number * 2);

// console.log(double);

// const personES6 = {
//   name: "John",
//   lastname: "Doe",
//   sayFullName() {
//     return () => {
//       console.log(`${this.name} ${this.lastname}`);
//     };
//   }
// };

// personES6.sayFullName()();

// Spread operator

// function sum(x, y, z) {
//   console.log(x + y + z);
// }

// let numbers = [10, 20, 30];

// sum(...numbers);

// Rest parameter

// const a = (x, y, ...rest) => {
//   console.log(x + y + rest[0] + rest[1]);
// };

// a(10, 20, 30, 40);

// Destructuring

// const arr = [10, 20, 30, 40, 50];
// const [ten, twenty, , , fifty] = arr;
// console.log(ten, twenty, fifty);

// const person = {
//   firstname: "John",
//   lastname: "Smith",
//   age: 20
// };

// const { firstname, lastname } = person;
// console.log(firstname, lastname);

// const aboutMe = ({ firstname, lastname, age }) => {
//   console.log(`I am ${firstname} ${lastname} and I am ${age} years old.`);
// };

// aboutMe(person);

// Classes

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  aboutPerson() {
    console.log(
      `My name is ${this.firstname} ${this.lastname} and I am ${
        this.age
      } years old.`
    );
  }
}

class Developer extends Person {
  constructor(firstname, lastname, age, experience, projects) {
    super(firstname, lastname, age);
    this.experience = experience;
    this.projects = projects;
  }

  aboutDev() {
    console.log(
      `My name is ${this.firstname} ${this.lastname} and I am ${
        this.age
      } years old with ${
        this.experience
      } years of experience and I have participated in ${
        this.projects
      } projects.`
    );
  }
}

const nickPerson = new Person("Nick", "Smith", 30);
nickPerson.aboutPerson();

const bobDev = new Developer("Bob", "James", 40, 15, 7);
bobDev.aboutDev();
bobDev.aboutPerson();
