/*
 * Topic 01
 */

/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'pro';
// const canAccessContent = sub !== 'free';

// console.log('Чи є доступ до контенту?', canAccessContent);

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//   weight = Number(weight);
//   height = Number(height);

//   return (weight / height ** 2).toFixed(1);
// }

// const bmi = calcBMI('88.3', '1.75');

// console.log(bmi); // 28.8

/*
 * Topic 02
 */

/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const minutes = 15;

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = null;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

//? 1 Варіант
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

//? 2 Варіант
// for (let i = 1; i <= 100; i++) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 * Topic 03
 */

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок літер)
? та виводить її в консоль.
*/

// const string = 'Hello world!';

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log(min);

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let total = 0;

/*
? Напиши скрипт, який виводить у консоль усі слова рядка
? крім першого і останнього. Результуючий рядок не повинен починатися
? або закінчуватися символ пробілу.
? Скрипт повинен працювати для будь-якого рядка.
*/

// const string = 'Welcome to the future';

/*
 * Topic 04
 */

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// function checkCaseOfLetter(letter) {
//   return letter === letter.toLowerCase() ? 'lower case' : 'upper case';
// }

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// function changeCaseOfLetters(str) {
//   console.log(str);

//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }

//   return result;
// }

// console.log(changeCaseOfLetters('AbC')); // aBc
// console.log(changeCaseOfLetters('CBA')); // cba
