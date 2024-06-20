/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const fieldEl = document.querySelector('.js-user-name');
const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input
*/

// const onFieldElInput = event => {
//   const fieldValue = fieldEl.value;

//   console.log(fieldValue);
// };

// fieldEl.addEventListener('input', onFieldElInput);

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

// const onFieldElBlur = event => {
//   const fieldValue = fieldEl.value;

//   alert(`Welcome ${fieldValue}!`);
// };

// fieldEl.addEventListener('blur', onFieldElBlur);

// const onFieldElChange = event => {
//   const fieldValue = fieldEl.value;

//   alert(`Welcome ${fieldValue}!`);
// };

// fieldEl.addEventListener('change', onFieldElChange);

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

// const onCheckboxElChange = event => {
//   if (checkboxPolicyEl.checked) {
//     alert('Done!');
//   }
// };

// checkboxPolicyEl.addEventListener('change', onCheckboxElChange);
