/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

const user = {
  firstName: 'Oleksii',
  lastName: 'Repin',
};
const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.age = 20;

console.log('user:', user);
console.log('userCopy:', userCopy);
