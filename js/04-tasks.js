/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const rectSidesArr = dimensions.split(' ');

//   console.log(rectSidesArr);

//   return Number(rectSidesArr[0]) * Number(rectSidesArr[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

// function printInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   console.log(names);
//   console.log(phones);

//   for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} : ${phones[i]}`);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напиши функцію formatTime(minutes) яка переведе значення
? minutes (кількість хвилин) у рядок у форматі годин
? та хвилин HH:MM.
*/

//? Форматування рядка за допомогою конструкція if(){}
// function formatTime(minutes) {
//   let hours = Math.floor(minutes / 60);
//   let remainderMinutes = minutes % 60;

//   console.log(hours);
//   console.log(remainderMinutes);

//   if (hours < 10) {
//     hours = '0' + String(hours);
//   }

//   if (remainderMinutes < 10) {
//     remainderMinutes = '0' + String(remainderMinutes);
//   }

//   return `${hours}:${remainderMinutes}`;
// }

// console.log(formatTime(79)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//? Форматування рядка за допомогою методу padStart().
// function formatTime(minutes) {
//   let hours = Math.floor(minutes / 60);
//   let remainderMinutes = minutes % 60;

//   console.log(hours);
//   console.log(remainderMinutes);

//   hours = String(hours).padStart(2, '0');
//   remainderMinutes = String(remainderMinutes).padStart(2, '0');

//   return `${hours}:${remainderMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(courseName) - додає курс в кінець колекції
? removeCourse(courseName) - видаляє курс з колекції
? updateCourse(oldCourseName, newCourseName) - змінює назву курса
*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

console.log(courses);

const addCourse = function (courseName) {
  if (courses.includes(courseName)) {
    console.log(`У вас вже є курс ${courseName}`);

    return;
  }

  courses.push(courseName);
};

const removeCourse = function (courseName) {
  const idxOfCourse = courses.indexOf(courseName);

  if (idxOfCourse === -1) {
    console.log(`Курс з такою назвою не знайдено`);

    return;
  }

  courses.splice(idxOfCourse, 1);
};

const updateCourse = function (oldCourseName, newCourseName) {
  const idxOfCourse = courses.indexOf(oldCourseName);

  courses.splice(idxOfCourse, 1, newCourseName);
};

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас вже є такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('React'); // 'Курс з такою назвою не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// function checkCaseOfLetter(letter) {}

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// function changeCaseOfLetters(str) {}

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba
