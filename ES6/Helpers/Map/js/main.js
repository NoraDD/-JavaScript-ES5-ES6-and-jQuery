// Examples

const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map(function(number) {
  return number * 10;
});

console.log(newArray);

const users = [
  { user: "Martin Jones", age: 32, eyes: "brown" },
  { user: "Jane Doe", age: 20, eyes: "blue" },
  { user: "Brian Wrecker", age: 40, eyes: "brown" }
];

const listUsers = users.map(function(item) {
  return item.user;
});

listUsers.forEach(function(item) {
  let select = document.querySelector("select");

  select.insertAdjacentHTML("afterbegin", `<option>${item}</option>`);
});
