/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//? Функція конструктор
// function User(firstName, lastName, age, login, password) {
//   // this = {};

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.login = login;
//   this.password = password;

//   // this.getFullName = function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // };

//   // return this;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.dir(User);

// const userA = new User('Oleksii', 'Repin', 30, 'test@gmail.com', 'qwerty123');

// console.log(userA);
// console.log(userA.getFullName());

// const userB = new User('Maurice', 'Wong', 20, 'some@gmail.com', 'ytrewq321');

// console.log(userB);
// console.log(userB.getFullName());

//? Клас
// class User {
//   #password;
//   #login;

//   static test = 10;

//   constructor(firstName, lastName, age, login, password) {
//     // this = {};

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.#login = login;
//     this.#password = password;

//     // return this;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getPassword() {
//     return this.#password;
//   }

//   setPassword(newPassword) {
//     this.#password = newPassword;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const userA = new User('Oleksii', 'Repin', 30, 'test@gmail.com', 'qwerty123');

// console.log(userA);

// console.log(userA.login);
// userA.login = 'new@gmail.com';
// console.log(userA.login);

// console.log(userA);

// console.log(userA.getFullName());
// console.log(userA.getPassword());

// userA.setPassword('123456');
// console.log(userA.getPassword());

// class OwnMath {
//   static PI = 3.14;

//   static floor() {}

//   static ceil() {
//     console.log('Ceil');
//   }

//   static round() {}
// }

// console.dir(OwnMath);

// OwnMath.ceil();
