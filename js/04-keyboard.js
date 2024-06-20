/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.dir(event);

//   console.log(`code: ${event.code}, key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */

document.addEventListener('keydown', event => {
  if (event.shiftKey && event.code === 'KeyS') {
    alert('shift + s');
  }
});
