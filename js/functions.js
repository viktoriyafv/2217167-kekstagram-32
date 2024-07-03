/* Функия, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true.
 Если встреча не выходит за рамки рабочего дня, и false, если выходит.*/

const checkTimeLength = (startTimeWork, endTimeWork, startTimeMeeting, timeMeeting) => {

  const timeStartTimeWork = parseInt(startTimeWork.split(':')[0] * 60, 10) + parseInt(startTimeWork.split(':')[1], 10);

  const timeEndTimeWork = parseInt(endTimeWork.split(':')[0] * 60, 10) + parseInt(endTimeWork.split(':')[1], 10);

  const timeStartTimeMeeting = parseInt(startTimeMeeting.split(':')[0] * 60, 10) + parseInt(startTimeMeeting.split(':')[1], 10);

  const timeEndTimeMeeting = parseInt(timeStartTimeMeeting, 10) + parseInt(timeMeeting, 10);

  if (timeStartTimeWork <= timeStartTimeMeeting && timeEndTimeWork >= timeEndTimeMeeting) {
    return true;
  } else {
    return false;
  }
};

// eslint-disable-next-line no-console
console.log(checkTimeLength('08:00', '17:30', '14:00', 90));

// console.log(checkTimeLength('8:0', '10:0', '8:0', 120));
// console.log(checkTimeLength('08:00', '14:30', '14:00', 90));
// console.log(checkTimeLength('14:00', '17:30', '08:0', 90));
// console.log(checkTimeLength('8:00', '17:30', '08:00', 900));

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
