/*
 * Додавання прослуховувача подій на кожен елемент
 */

//? Отримай колір квадратика по якому було здійснено клік

// const boxesEl = document.querySelectorAll('.js-box');

// boxesEl.forEach(box => {
//   box.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//? Отримай колір квадратика по якому було здійснено клік

const containerEl = document.querySelector('.js-container');

containerEl.addEventListener('click', event => {
  // console.log(event.target);
  // console.log(event.currentTarget);

  if (event.target !== event.currentTarget) {
    console.log(event.target.dataset.color);
  }
});
