// Create an array.
// var array = [1, 2, 3];
// console.log(array);

//How many values inside the array.
// console.log(array.length);

//Console log the third one.
// console.log(array[2]);

//Change the third one.
// array[2] = 78;

//Add a fourth value.
// array[3] = 100;

//Add a sixth value.
// array[5] = 50;

//Add a value at the end of the array.
// array.push(11);

//Remove the last value of the array.
// array.pop();

//Substract the last value in a variable.
// var single = array.pop();
// console.log(single);

//Remove the first value of the array.
// array.shift();

//Substract the first value into a variable.
// var single = array.shift();
// console.log(single);

//Add a value at the beggining of the array.
// array.unshift(44);

// console.log(array);

//indexOf()
// var array = ["John", "Helen", "Francis", "Mark"];
// console.log(array.indexOf("Helen"));

// if (array.indexOf("Rob") !== -1) {
//   console.log("Exists");
// } else {
//   console.log("Does not exist");
// }

//splice()
// var array = ["John", "Helen", "Francis", "Mark"];
// var newArr = array.splice(1, 2);

// console.log(newArr);
// console.log(array);

//slice()
// var array = ["John", "Helen", "Francis", "Mark"];
// var newArr = array.slice(1, 2);

// console.log(newArr);
// console.log(array);

//CONCAT
// var array = ["John", "Helen", "Francis", "Mark"];
// var otherArray = ["Marcy", "Michael"];

// var finalArray = array.concat(otherArray);
// console.log(finalArray);

//JOIN
// var array = ["John", "Helen", "Francis", "Mark"];

// var finalArray = array.join(" ");
// console.log(finalArray);

//Filter
// var array = [1, 5, 10, 20, 30];
// var names = ["John", "Helen", "Francis", "Mark", "Helen"];

// var filters = array.filter(function(item) {
//   return item > 9;
// });

// var filteredNames = names.filter(function(name) {
//   if (name !== "Helen") {
//     return name;
//   }
// });

// console.log(filteredNames);

//MAP
// var numbers = [1, 5, 10, 20, 30];

// var filteredNumbers = numbers.map(function(number) {
//   return number + 5;
// });

// console.log(filteredNumbers);

//Foreach
// var names = ["John", "Helen", "Francis", "Mark", "Helen"];

// names.forEach(function(name) {
//   if (name !== "Helen") {
//     console.log("Hi, my name is: " + name);
//   }
// });
