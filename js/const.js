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

const indefications = {
  MAXAVATARNUMBER: 6,
  MAXPHOTOID: 25,
  MAXPHOTOURL: 25,
  MINLIKES: 15,
  MAXLIKES: 200,
  MAXCOMMENTS: 30,
  COMMENTSAMOUNT: 5,
  USERAVATARWIDTH: 35,
  USERAVATARHEIGTH: 35,
  MAXHASHTAGCOUNT: 5,
  MAXCOMMENTSDESRIPTIONS: 140
};

const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');

export { NAMES, MESSAGES, DESCRIPTIONS, indefications, body, formUpload };
