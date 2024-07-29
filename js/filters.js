import { debounce, shuffle } from './util';
import { generatePictures } from './rendering-picture';
import { indefications } from './const.js';

const filterForm = document.querySelector('.img-filters');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

let currentFilter = defaultFilter;
const RERENDER_DELAY = 500;

const pictureElements = () => document.querySelectorAll('.picture');
const removePictures = () => {
  pictureElements().forEach((picture) => picture.remove());
};

const filterByRandom = (picture) => {
  const randomList = shuffle(picture.length);
  // eslint-disable-next-line no-unreachable, no-console
  console.log(randomList);
  const randomPictures = [];
  // eslint-disable-next-line no-unreachable, no-console
  console.log(randomPictures);
  randomList.slice(0, 10).forEach((randomId) => {
    randomPictures.push(picture[randomId]);
  });
  return generatePictures(randomPictures);
};

const filterByComments = (picture) => {
  const pictureByComments = picture.slice(generatePictures(picture.slice(0, indefications.SIMILARPICTURECOUNT).sort((a, b) => a.comments.length < b.comments.length ? 1 : -1)));
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
        generatePictures(picture.slice(0, indefications.SIMILARPICTURECOUNT));
        break;
      case randomFilter:
        removePictures();
        filterByRandom(picture);
        break;
      case discussedFilter:
        removePictures();
        filterByComments(picture);
        break;
    }
  }),
  RERENDER_DELAY
  );
};

export { addFilters };
