/*
? Фільтрація за діапазоном
?
? Напишіть функцію filterRange(numbers, a, b), яка приймає масив numbers, 
? шукає в ньому елементи більші-рівні min та менші-рівні max і віддає масив цих елементів.
*/
// Повна версія
// const filterRange = (numbers, min, max) => {
//   const filteredNumbers = numbers.filter((el, idx, arr) => {
//     return el >= min && el <= max;
//   });

//   return filteredNumbers;
// };

// console.log([10, 20, 2, 3, 56, 4]);
// console.log(filterRange([10, 20, 2, 3, 56, 4], 3, 10));

// Скорочена версія
// const filterRange = (numbers, min, max) => numbers.filter(el => el >= min && el <= max);

// console.log([10, 20, 2, 3, 56, 4]);
// console.log(filterRange([10, 20, 2, 3, 56, 4], 3, 10));

//? Відфільтруйте масив на унікальні значення.
// 1 Варіант через forEach() та includes();
// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filtredUsers = [];

// users.forEach((username, idx, arr) => {
//   if (!filtredUsers.includes(username)) {
//     filtredUsers.push(username);
//   }
// });

// console.log('users:', users);
// console.log('filtredUsers:', filtredUsers);

// 2 Варіант через filter() та indexOf();
// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];

/*
1 Ітерація
el = 'Andre';
idx = 0;
arr = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];

return 0 === 0;

2 Ітерація
el = 'Lester';
idx = 1;
arr = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];

return 1 === 1;

3 Ітерація
el = 'Andre';
idx = 2;
arr = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];

return 0 === 2;

4 Ітерація
el = 'Lester'
idx = 3;
arr = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];

return 1 === 3;
*/

// const filtredUsers = users.filter((el, idx, arr) => {
//   return arr.indexOf(el) === idx;
// });

// console.log('users:', users);
// console.log('filtredUsers:', filtredUsers);

//? Відфільтруйте масив з користувачами на унікальні значення.
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];
// const filtredUsers = [];

/*
1 Ітерація методу forEach
el = { firstName: 'Herbert', age: 25 };
idx = 0;
arr = [{ firstName: 'Herbert', age: 25 },{ firstName: 'Herbert', age: 25 },{ firstName: 'Todd', age: 30 },{ firstName: 'Todd', age: 30 },{ firstName: 'Lida', age: 29 },];

const user = undefined;

2 Ітерація методу forEach
el = { firstName: 'Herbert', age: 25 }
idx = 1;
arr = [{ firstName: 'Herbert', age: 25 },{ firstName: 'Herbert', age: 25 },{ firstName: 'Todd', age: 30 },{ firstName: 'Todd', age: 30 },{ firstName: 'Lida', age: 29 },];

const user = { firstName: 'Herbert', age: 25 }
*/

// allUsers.forEach((el, idx, arr) => {
//   const user = filtredUsers.find((currentUser, index, array) => {
//     return el.firstName === currentUser.firstName;
//   });

//   if (user === undefined) {
//     filtredUsers.push(el);
//   }
// });

// console.table(allUsers);
// console.table(filtredUsers);

/*
? Відсортувати користувачів за віком
? 
? Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
*/
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const sortByAge = users => {
//   const sortedUsers = users.toSorted((currentEl, nextEl) => {
//     return nextEl.age - currentEl.age;
//   });

//   return sortedUsers;
// };

// console.log(allUsers);
// console.log(sortByAge(allUsers));

/*
? Вирахувати середній вік
? Напишіть функцію getAverageAge(users), яка приймає масив об’єктів 
? з властивістю age та повертає середній вік.
*/
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const getAverageAge = users => {
//   const totalAge = users.reduce((acc, el, idx, arr) => {
//     return acc + el.age;
//   }, 0);

//   return totalAge / users.length;
// };

// console.log(getAverageAge(allUsers)); // 28

/*
? Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

/*
1 Ітерація
acc = 0;
el = { label: 'Apples', price: 100, quantity: 2 };
idx = 0;
arr = [{ label: 'Apples', price: 100, quantity: 2 },{ label: 'Bananas', price: 120, quantity: 3 },{ label: 'Lemons', price: 70, quantity: 4 },]

return 200;

2 Ітерація
acc = 200;
el = { label: 'Bananas', price: 120, quantity: 3 };
idx = 1;
arr = [{ label: 'Apples', price: 100, quantity: 2 },{ label: 'Bananas', price: 120, quantity: 3 },{ label: 'Lemons', price: 70, quantity: 4 },]

return 560;

3 Ітерація
acc = 560;
el = { label: 'Lemons', price: 70, quantity: 4 };
idx = 2;
arr = [{ label: 'Apples', price: 100, quantity: 2 },{ label: 'Bananas', price: 120, quantity: 3 },{ label: 'Lemons', price: 70, quantity: 4 },]

return 840;
*/

// const totalAmount = cart.reduce((acc, el, idx, arr) => {
//   return acc + el.price * el.quantity;
// }, 0);

// console.log(totalAmount);

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
? значенням властивості price залежно від переданої знижки.
? Через метод map()
 */
// const allCars = [
//   { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
//   { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
//   { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
//   { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
//   { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
//   { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
//   { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
// ];

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));
