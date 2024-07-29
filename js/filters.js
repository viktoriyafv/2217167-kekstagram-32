import { debounce, shuffle } from './util';
import { generatePictures } from './rendering-picture';
import { Indefications } from './const.js';

const filterForm = document.querySelector('.img-filters');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

let currentFilter = defaultFilter;

const pictureElements = () => document.querySelectorAll('.picture');
const removePictures = () => {
  pictureElements().forEach((picture) => picture.remove());
};

const filterByRandom = (picture) => {
  const randomList = shuffle(picture.length);
  const randomPictures = [];
  randomList.slice(0, Indefications.RANDOM_PICTURE_COUNT).forEach((randomId) => {
    randomPictures.push(picture[randomId]);
  });
  return generatePictures(randomPictures);
};

const filterByComments = (picture) => {
  const pictureByComments = picture.slice(generatePictures(picture.slice(0, Indefications.SIMILAR_PICTURE_COUNT).sort((a, b) => a.comments.length < b.comments.length ? 1 : -1)));
  return pictureByComments;
};

const addFilters = (picture) => {
  filterForm.addEventListener('click', debounce((evt) => {
    currentFilter.classList.remove('img-filters__button--active');
    currentFilter = evt.target;
    currentFilter.classList.add('img-filters__button--active');
    switch (currentFilter) {
      case defaultFilter:
        removePictures();
        generatePictures(picture.slice(0, Indefications.SIMILAR_PICTURE_COUNT));
        break;
      case randomFilter:
        removePictures();
        filterByRandom(picture);
        filterByRandom(picture);
        break;
      case discussedFilter:
        removePictures();
        filterByComments(picture);
        break;
    }
  }),
  Indefications.RERENDER_DELAY
  );
};

export { addFilters };
