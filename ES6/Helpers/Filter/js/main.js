// Examples

const products = [
  { name: "ipad", category: "devices" },
  { name: "sony 3d", category: "tv" },
  { name: "e256", category: "blender" },
  { name: "super vision", category: "tv" },
  { name: "iphone 7", category: "phones" }
];

const tv = products.filter(function(item) {
  return item.category === "tv";
});

console.log(tv);

const items = [
  { name: "ipad", category: "devices", number: 20, price: 200 },
  { name: "sony 3d", category: "tv", number: 0, price: 400 },
  { name: "e256", category: "blender", number: 3, price: 50 },
  { name: "super vision", category: "tv", number: 7, price: 500 },
  { name: "iphone 7", category: "phones", number: 40, price: 2 }
];

const results = items.filter(function(item) {
  return item.category === "tv" && item.number > 0 && item.price > 200;
});

console.log(results);
