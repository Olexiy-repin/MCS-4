/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 15];

/*
1 Ітерація
acc = 0
el = 5
idx = 0
arr = [5, 10, 15]

return 0 + 5;

2 Ітерація
acc = 5
el = 10
idx = 1
arr = [5, 10, 15]

return 5 + 10;

3 Ітерація
acc = 15
el = 15
idx = 2
arr = [5, 10, 15]

return 15 + 15;

30

*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(numbers);
// console.log(total);

/*
? Рахуємо загальну зарплату
 */
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const salariesValues = Object.values(salary);
/*
[100, 50, 150]

1 Ітерація
acc = 0;
el = 100;
idx = 0;
arr = [100, 50, 150];

return 0 + 100;

2 Ітерація
acc = 100;
el = 50;
idx = 1;
arr = [100, 50, 150];

return 100 + 50;

3 Ітерація
acc = 150;
el = 150;
idx = 2;
arr = [100, 50, 150];

return 150 + 150;

300
*/
// const totalSalary = salariesValues.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(salary);
// console.log(salariesValues);
// console.log(totalSalary);

/*
? Рахуємо загальну кількість годин
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log(totalTimePlayed);

/*
? Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = 0;

// console.log(totalAmount);
