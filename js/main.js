import { generatePictures } from './generate-picture.js';
import { setUserFormSubmit } from './valid.js';
import { closeUploadOverlay } from './form.js';
import { getData } from './api.js';
import { openErrorDataForm } from './success-error.js';
import { addFilters } from './filters.js';
import { Indefications } from './const.js';

const imgFilters = document.querySelector('.img-filters');

getData()
  .then((picture) => {
    generatePictures(picture.slice(0, Indefications.SIMILAR_PICTURE_COUNT));
    imgFilters.classList.remove('img-filters--inactive');
    addFilters(picture);
  })
  .catch(() => {
    openErrorDataForm();
    imgFilters.classList.add('img-filters--inactive');
  });

setUserFormSubmit(closeUploadOverlay);
