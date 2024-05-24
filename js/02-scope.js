/*
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const lastName = 'Repin';

const foo = function () {
  const firstName = 'Oleksii';

  console.log('firstName:', firstName);

  if (true) {
    const userAge = 20;

    console.log('userAge:', userAge);

    console.log('lastName:', lastName);
  }
};

foo();
