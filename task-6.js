'use strict';
let total = 0;
let input;
const numbers = [];
for (let i = 0; input !== null; i += 1) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  } else {
    numbers[i] = Number(input);
    total += numbers[i];
  }
}
console.log(`Сумма чисел равна ${total}.`);