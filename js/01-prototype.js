/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
? Object.create()
*/

// const userMethods = {
//   some: 'Hello',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   changeAge(newAge) {
//     this.age = newAge;
//   },
// };

// const userA = Object.create(userMethods);

// userA.firstName = 'Oleksii';
// userA.lastName = 'Repin';
// userA.age = 30;

// console.log(userA);
// console.log(userA.getFullName());

// const userB = Object.create(userMethods);

// userB.firstName = 'Warren';
// userB.lastName = 'Jenkins';
// userB.age = 34;

// console.log(userB);
// console.log(userB.getFullName());

// const userC = Object.create(userMethods);

// userC.firstName = 'Walter';
// userC.lastName = 'Gutierrez';
// userC.age = 20;

// console.log(userC);
// console.log(userC.getFullName());

/*
? Ланцюжки прототипів
*/

// const objC = {
//   c: 'Object c',
// };

// const objB = Object.create(objC);

// objB.b = 'Object b';

// const objA = Object.create(objB);

// objA.a = 'Object a';

// console.log(objA);
// console.log(objA.b);
// console.log(objA.c);
// console.log(objA.firstName);

/*
? Перебір власних властивостей з hasOwnProperty()
*/

// const objC = {
//   c: 'Object c',
// };

// const objB = Object.create(objC);

// objB.b = 'Object b';

// const objA = Object.create(objB);

// objA.a = 'Object a';

// console.log(objA);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.hasOwnProperty('b'));
// console.log(objA.hasOwnProperty('c'));

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const objAKeys = Object.keys(objA);

// console.log(objAKeys);

// for (const key of objAKeys) {
//   console.log(key);
// }
