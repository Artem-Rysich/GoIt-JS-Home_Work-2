'use strict';
const calculateEngravingPrice = function (message, pricePerWord) {
  console.log(`Содержимое гравировки : '${message}'.`);
  console.log(`Цена за один символ : ${pricePerWord} кредитов.`);
  const outputMessage = message.split(' ');
  const numberOfWords = outputMessage.length;
  return numberOfWords * pricePerWord;
};
console.log(
  `Сумма заказа : ${calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  )} кредитов.`,
);
console.log(
  `Сумма заказа : ${calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  )}кредитов.`,
);
console.log(
  `Сумма заказа : ${calculateEngravingPrice(
    'Donec orci lectus aliquam est magnis',
    40,
  )}кредитов.`,
);
console.log(
  `Сумма заказа :${calculateEngravingPrice(
    'Donec orci lectus aliquam est magnis',
    20,
  )}кредитов.`,
);
