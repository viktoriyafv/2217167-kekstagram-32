/* Функция для проверки длины строки */

const checkStringLength = (string, maxLength) => string.length <= maxLength;

// eslint-disable-next-line no-console
console.log(checkStringLength('The sea is worried once', 23));

// eslint-disable-next-line no-console
console.log(checkStringLength('The sea is worried once, the sea is worried twice', 23));

// eslint-disable-next-line no-console
console.log(checkStringLength('The sea is worried', 23));

/*Функция для проверки, является ли строка палиндромом*/

const isPalindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toUpperCase();
  const reversed = normalString.split('').reverse().join('');
  // eslint-disable-next-line no-console
  console.log(normalString === reversed);
  return normalString === reversed;
};

// eslint-disable-next-line no-console
isPalindrome('топот');

// eslint-disable-next-line no-console
isPalindrome('Лёша на полке клопа нашёл');

// eslint-disable-next-line no-console
isPalindrome('Алеша на полке клопа нашел');


/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.*/

const isNumbers = (string) => {
  const transformString = string.toString();
  let checkString = '';
  for (let i = 0; i < transformString.length; i++) {
    const char = parseInt(transformString.at(i), 10);
    checkString += Number.isNaN(char) ? '' : char;
  }
  // eslint-disable-next-line no-console
  console.log(checkString);
  return checkString;
};
// eslint-disable-next-line no-console
isNumbers('2023 год');

// eslint-disable-next-line no-console
isNumbers('-140.9');

// eslint-disable-next-line no-console
isNumbers('1 кефир, 0.5 батона');

// eslint-disable-next-line no-console
isNumbers('кефир');
