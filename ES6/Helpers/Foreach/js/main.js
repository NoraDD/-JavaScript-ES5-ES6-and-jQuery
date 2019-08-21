// Examples

var artists = ["Clapton", "U2", "Lamar"];

artists.forEach(function(artist) {
  console.log(artist);
});

const names = ["Francis", "Lisa", "Ron"];
let template = "";

names.forEach(function(name) {
  template += `<div>Hi my name is ${name} <strong>Click me</strong></div>`;
});

document.body.insertAdjacentHTML("afterbegin", template);

const purchases = [
  { product: "Phones", number: 2, amount: 100 },
  { product: "TV", number: 5, amount: 100 },
  { product: "Mac", number: 10, amount: 100 }
];

let total = 0;

purchases.forEach(function(purchase) {
  total += purchase.number * purchase.amount;
});

console.log(total);

