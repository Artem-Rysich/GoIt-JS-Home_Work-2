'use strict';
let logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
console.log('Именна');
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('');
console.log('Числа');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
