// var user = {
//   name: "Francis",
//   lastname: "Jones",
//   age: 20,
//   cars: ["Honda", "Ford"],
//   misc: {
//     hobbies: ["Skating", "Driving"],
//     lang: "Eng"
//   },
//   salute: function() {
//     console.log("Hi there, " + this.lastname);
//     console.log(this.cars[0]);
//   }
// };

// console.log(user.name);
// console.log(user["name"]);
// user.salute();

// var user = new Object();

// user.name = "Francis";
// user.age = 20;
// console.log(user);

// var user = {
//   name: "Francis",
//   lastname: "Jones"
// };

// Object.prototype.scream = function() {
//   console.log("Ahhh");
// };

// user.scream();
// console.log(user.__proto__);

// var user = new Object();
// user.name = "Max";

// console.log(user);
// console.log(user.__proto__);

// Object.prototype.scream = function() {
//   console.log("Ahh");
// };

// user.scream();

//Constructor

// function User() {}

// var user = new User();
// user.name = "Max";

// User.prototype.scream = function() {
//   console.log("Ahhhh");
// };

// console.log(user);
// console.log(user.__proto__);

// user.scream();

// function FastCar() {
//   this.seat = 2;
//   this.available = function() {
//     console.log(this.name + " is not available");
//   };
// }

// var ford = new FastCar();
// var chevy = new FastCar();

// ford.name = "Mustang";
// chevy.name = "Nova";

// ford.available();
// chevy.available();

// console.log(ford);
// console.log(chevy);

function FastCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.seats = 2;
  this.available = function() {
    console.log(this.name + " is not available");
  };
}

var ford = new FastCar("Ford", "Black");

// delete ford.seats;

// if ("color" in ford) {
//   console.log("has a color");
// }

for (field in ford) {
  // console.log(ford[field]);

  if (field === "brand") {
    console.log(ford[field]);
  }
}

// console.log(ford);
