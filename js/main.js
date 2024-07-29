import { generatePictures } from './rendering-picture.js';
import { setUserFormSubmit } from './valid.js';
import { closeUploadOverlay } from './form.js';
import { getData } from './api.js';
import { onErrorDataForm } from './success-error.js';
import { addFilters } from './filters.js';

const imgFilters = document.querySelector('.img-filters');
const SIMILAR_PICTURE_COUNT = 25;

getData()
  .then((picture) => {
    generatePictures(picture.slice(0, SIMILAR_PICTURE_COUNT));
    imgFilters.classList.remove('img-filters--inactive');
    addFilters(picture);
  })
  .catch(() => {
    onErrorDataForm();
    imgFilters.classList.add('img-filters--inactive');
  });

setUserFormSubmit(closeUploadOverlay);
