/*
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

// Повна версія
// const numbers = [5, 10, 15, 20, 25, 0];
// const filteredNumbers = numbers.filter((el, idx, arr) => {
//   return el >= 15;
// });

// console.log('numbers: ', numbers);
// console.log('filteredNumbers: ', filteredNumbers);

// Скорочена версія
// const numbers = [5, 10, 15, 20, 25, 0];
// const filteredNumbers = numbers.filter(el => el >= 15);

// console.log('numbers: ', numbers);
// console.log('filteredNumbers: ', filteredNumbers);

/*
 ? ---------------------------
 */
// const allCars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
? значення параметра threshold.
 */

// Повна версія
// const filterByPrice = (cars, threshold) => {
//   const filteredCarsByPrice = cars.filter((el, idx, arr) => {
//     return el.price <= threshold;
//   });

//   return filteredCarsByPrice;
// };

// console.log(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

// Скорочена версія
// const filterByPrice = (cars, threshold) => cars.filter(el => el.price <= threshold);

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів
? властивість onSale яких true.
 */
// Повна версія
// const getCarsWithDiscount = cars => {
//   const carsWithDiscount = cars.filter((el, idx, arr) => {
//     return el.onSale;
//   });

//   return carsWithDiscount;
// };

// console.table(getCarsWithDiscount(allCars));

// Скорочена версія
// const getCarsWithDiscount = cars => cars.filter(el => el.onSale);

// console.table(getCarsWithDiscount(allCars));

/*
? Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
? зі значенням параметра type.
 */
// Повна версія
// const getCarsWithType = (cars, type) => {
//   const carsWithType = cars.filter((el, idx, arr) => {
//     return el.type.toLowerCase() === type.toLowerCase();
//   });

//   return carsWithType;
// };

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));

// Скорочена версія
// const getCarsWithType = (cars, type) => cars.filter(el => el.type.toLowerCase() === type.toLowerCase());

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));
