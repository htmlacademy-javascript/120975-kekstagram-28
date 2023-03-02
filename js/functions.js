// Функция для проверки длины строки
const checkString = (string, maxLength) => string.length <= maxLength;
checkString('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};
isPalindrome('Лёша на полке клопа нашёл ');

// Функция извлекающая из строки цифры в виде целого положительного числа
const extractNumber = (string) => {
  if (typeof string === 'number') {
    string += '';
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};
extractNumber('ECMAScript 2022');

// Функция с тремя параметрами: исходная строка, минимальная длина и строка с добавочными символами
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('q', 4, 'werty');
