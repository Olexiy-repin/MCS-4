/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

//? Function declaration
// console.log(sum(10, 20));

// function sum(a, b) {
//   return a + b;
// }

//? Function expression
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(10, 20));

//? arguments
// const foo = function () {
//   console.log(arguments);

//   for (const item of arguments) {
//     console.log(item);
//   }
// };

// foo(10, 'Hello', true, 20, 100);

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/
// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/
// const calculateAverage = function () {
//   console.log('arguments:', arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
