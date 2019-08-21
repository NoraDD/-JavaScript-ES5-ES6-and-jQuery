// Examples

const brands = [
  { name: "Apple", id: 1 },
  { name: "HP", id: 2 },
  { name: "Samsung", id: 3 },
  { name: "Samsung", id: 4 }
];

const result = brands.find(function(brand) {
  return brand.name === "Samsung";
});

console.log(result);

const cars = [
  { brand: "Ford", price: 500, available: 2, type: "Sport car" },
  { brand: "Nissan", price: 200, available: 5, type: "Wagon" },
  { brand: "Chevy", price: 300, available: 4, type: "Sport car" },
  { brand: "Porshe", price: 100, available: 1, type: "Urban" }
];

function getResults(price, type) {
  return cars.find(function(car) {
    return car.price < price && car.available > 0 && car.type === type;
  });
}

document.querySelector(".search").addEventListener("click", function() {
  var price = parseInt(document.querySelector("#price").value);
  var type = document.querySelector("#type").value;

  let results = getResults(price, type);

  if (results) {
    console.log(`Found ${results.brand} for $ ${results.price}`);
  } else {
    console.log(`Sorry, no car`);
  }
});
