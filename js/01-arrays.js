/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

console.log(courses);

console.log(courses[2]);

courses[0] = 'XML';

console.log(courses);

console.log(courses[5]);

courses[9] = 'New course!';

console.log(courses);

console.log(courses.length);

const firstElement = courses[0];

console.log('firstElement:', firstElement);

const lastElement = courses[courses.length - 1];

console.log('lastElement:', lastElement);
