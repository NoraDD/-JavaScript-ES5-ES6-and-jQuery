// Examples

// const request = (url, data) => {
//   $.ajax({ method: "POST", url, data });
// };

// request("http://whatever.com", { car: "Ford" });

const createCharacter = (name, power, friend) => {
  return {
    name,
    power,
    getFriend() {
      return friend;
    }
  };
};

const character = createCharacter("Superman", "Fly", "Lois Lane");
console.log(character);

//Default argument

function randomBrands() {
  const brands = ["Ford", "Audi", "BMW"];
  return brands[Math.floor(Math.random() * brands.length)];
}

function cars(brand = randomBrands()) {
  console.log(`My car is ${brand}`);
}

cars();

//Rest operator

function args(...args) {
  console.log(arguments);
}

args("Val 1", "Val 2", "Val 3");

//Spread operator

const brandCars = ["Ford", "Nissan"];
const otherBrands = ["Audi", "BMW"];

const newArray = [...brandCars, ...otherBrands];

console.log(newArray);
