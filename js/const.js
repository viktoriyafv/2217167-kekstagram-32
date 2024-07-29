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
  MAXCOMMENTSLENGTH: 140,
  RANDOMPICTURECOUNT: 10,
  SIMILARPICTURECOUNT: 25
};

const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const FILTERSCONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

export { NAMES, MESSAGES, DESCRIPTIONS, indefications, body, formUpload, imgUploadPreview, FILTERSCONFIG };
