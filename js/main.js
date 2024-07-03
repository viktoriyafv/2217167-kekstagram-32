const NAMES = [
  'Кузьма',
  'Тихон',
  'Вилка',
  'Шурик',
  'Милана',
  'Юрец',
  'Боня',
  'Мяус',
  'Просто Кот',
  'Мирон',
  'Сева',
  'Тимон',
  'Пумба'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Хештег за любовь',
  'Этот прекрасный мир',
  'Просто Мяу!',
  'ЗаМУРчательно',
  'Жду ваший комментов',
  'Без слов',
  'Одни эмоции',
];

const MAXAVATARNUMBER = 6;
const MAXPHOTOID = 25;
const MAXPHOTOURL = 25;
const MINLIKES = 15;
const MAXLIKES = 200;
const MAXCOMMENTS = 30;

const keksId = [25];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIdentifier = (a = 0,b = 1000)=>{
  const idNumber = [];
  return function (){
    let randomId = 0;
    do {
      randomId = getRandomInteger(a,b);
    } while (idNumber.includes(randomId));
    idNumber.push(randomId);
    return randomId;
  };
};

const idPhoto = getRandomIdentifier(1, MAXPHOTOID);
const idUser = getRandomIdentifier();
const urlPhoto = getRandomIdentifier(1, MAXPHOTOURL);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomComment = () => ({
  id: idUser(),
  avatar: `img/avatar-${getRandomInteger(1, MAXAVATARNUMBER)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)
});

const createKeksObject = () => ({
  id: idPhoto(),
  url: `photos/${urlPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MINLIKES, MAXLIKES),
  comments: Array.from({ length: getRandomInteger(0, MAXCOMMENTS) }, createRandomComment)
});

const similarObject = Array.from({ length: keksId }, createKeksObject);
// eslint-disable-next-line no-console
console.log(similarObject);
