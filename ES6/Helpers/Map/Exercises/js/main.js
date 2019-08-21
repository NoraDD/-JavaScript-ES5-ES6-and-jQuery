// First exercise

const paintings = [
  { painting: "Mona lisa", width: 200, height: 200 },
  { painting: "The scream", width: 400, height: 600 },
  { painting: "The last supper", width: 600, height: 700 }
];

const messagesArr = paintings.map(function(item) {
  return `The ${item.painting} is ${item.width} x ${item.height}`;
});

console.log(messagesArr);

// Second exercise

const cars = [
  { name: "Ford", price: 200 },
  { name: "Nissan", price: 400 },
  { name: "Chevy", price: 600 }
];

function convertPrice(price) {
  return price * 16.8;
}

const carsPrices = cars.map(function(car) {
  return `${car.name} is ${convertPrice(car.price)} Ars.`;
});

console.log(carsPrices);
