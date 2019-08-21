// Examples

// class Car {
//   constructor() {
//     this.status = "New";
//     this.wheels = 4;
//     this.avail = () => {
//       console.log("available");
//     };
//   }
// }

// const car = new Car();
// console.log(car);

// class Car {
//   constructor(options) {
//     this.status = options.status;
//     this.wheels = options.wheels;
//     this.avail = options.avail;
//   }
// }

// const car = new Car({
//   status: "New",
//   wheels: 4,
//   avail: () => {
//     console.log("available");
//   }
// });

// console.log(car);

class Car {
  constructor() {
    this.status = "New";
    this.wheels = 4;
    this.avail = () => {
      console.log("available");
    };
  }
}

class Ford extends Car {
  constructor() {
    super();
  }
}

const car = new Car();
const ford = new Ford();

ford.color = "red";

// console.log(car);
console.log(ford);
