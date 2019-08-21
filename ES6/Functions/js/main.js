// Examples

// const value = (x, y) => x + y;
// console.log(value(5, 5));

// const value = x => x + 10;
// console.log(value(5));

const cars = {
  brands: ["Ford", "Audi", "BMW"],
  category: "Sport car",
  message: function() {
    return this.brands.map(brand => {
      console.log(`${brand} is a ${this.category}`);
    });
  }
};

cars.message();
