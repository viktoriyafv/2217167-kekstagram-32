const FILE_TYPES = ['jpg', 'jpeg', 'png', 'pdf'];

const REGULAR_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const Indefications = {
  MAX_AVATAR_NUMBER: 6,
  MAX_PHOTO_ID: 25,
  MAX_PHOTO_URL: 25,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MAX_COMMENTS: 30,
  COMMENTS_AMOUNT: 5,
  USER_AVATAR_WIDTH: 35,
  USER_AVATAR_HEIGTH: 35,
  MAX_HASHTAG_COUNT: 5,
  MAX_COMMENTS_LENGTH: 140,
  RANDOM_PICTURE_COUNT: 10,
  SIMILAR_PICTURE_COUNT: 25,
  RERENDER_DELAY: 500,
  ERROR_DATA_TIMEOUT_MS: 5000
};

const FiltersConfig = {
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

export { FILE_TYPES, REGULAR_HASHTAG, Indefications, FiltersConfig };
