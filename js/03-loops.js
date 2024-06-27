/*
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    username: 'Kate',
  },
  {
    username: 'Alex',
  },
  {
    username: 'Mark',
  },
];

console.log(users);

/*
 ? Без деструктуризації
 */

// for (const user of users) {
//   console.log(user.username);
// }

/*
 ? З деструктуризацією
 */

// for (const { username } of users) {
//   // const {username} = { username: 'Kate'}

//   console.log(username);
// }

// users.forEach(({ username }) => {
//   console.log(username);
// });
