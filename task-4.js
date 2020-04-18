'use strict';
const formatString = function (string) {
  let arrayInString = string.split('');
  if (arrayInString.length > 40) {
    arrayInString.splice(40);
    let stringInArray = arrayInString;
    stringInArray = stringInArray.join('');
    console.log(`Форматированная строка : ${stringInArray} '...'.`);
  } else {
    console.log(`Оригинальная строка : ${arrayInString.join('')}`);
  }
};
formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');