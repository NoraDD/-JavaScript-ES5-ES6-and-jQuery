// document.body.children[0].textContent = 'this was changed';

// document.body.children[0].style.color = 'red';

// console.log(document.querySelector('div'));


// var parent = document.querySelector('.parent');
// var div = document.createElement('div');

// div.textContent = 'this is a new div';
// div.style.color = 'blue';
// div.style.fontSize = '20px';

// console.log(div)

// parent.insertAdjacentElement('beforebegin', div);

var button = document.querySelector('.myButton');

function click1() {
  console.log('clicked me');
}

function click2() {
  console.log('clicked me again');
  button.removeEventListener('click', click1);
}

button.addEventListener('click', click1);
button.addEventListener('click', click2);

// button.onclick = function() {
//   console.log('someone clicked me');
// }

// button.onmouseover = function() {
//   console.log('mouse over');
// }

// button.ondblclick = function() {
//   console.log('double click');
// }
