/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const greet = function () {
//   console.log('Hello!');
// };

// greet.test = 10;

// console.dir(greet);

// console.log(greet.test);

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, a, b, c) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(a, b, c);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 1, 2, 3);
// showFullName.apply(user, ['Hello', 1, 2, 3]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser

// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Hi', 10, 20, 30);

//? Викличте функцію changeColor в контексті різних обʼєктів

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

//? Створіть копію функції changeColor з привʼязаним контекстом

// const changeColor = function (color) {
//   // console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log(hat);

// changeHatColor('red');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

//? Передайте метод обʼєкта в якості callback функції

const user = {
  name: 'Luis',
  age: 30,

  showThis: function () {
    console.log('This --->', this);
  },

  showName: function (newName) {
    console.log(this.name);
  },
};

const someFunction = callback => {
  callback();
};

someFunction(user.showName.bind(user));
