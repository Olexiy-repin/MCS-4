/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

//? Через цикл for...in
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let total = 0;

// console.log(feedback);

// for (const key in feedback) {
//   total += feedback[key];
// }

// console.log(total);

//? Через метод Object.keys()
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const feedbackKeys = Object.keys(feedback);
// let total = 0;

// console.log('feedback:', feedback);
// console.log('feedbackKeys:', feedbackKeys);

// for (const key of feedbackKeys) {
//   total += feedback[key];
// }

// console.log(total);

//? Через метод Object.values()
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const feedbackValues = Object.values(feedback);
// let total = 0;

// console.log('feedback:', feedback);
// console.log('feedbackValues:', feedbackValues);

// for (const value of feedbackValues) {
//   total += value;
// }

// console.log(total);
