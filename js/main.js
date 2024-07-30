import { generatePictures } from './rendering-picture.js';
import { setUserFormSubmit } from './valid.js';
import { closeUploadOverlay } from './form.js';
import { getData } from './api.js';
import { onErrorDataForm } from './success-error.js';

const SIMILAR_PICTURE_COUNT = 25;

getData()
  .then((pictures) => {
    generatePictures(pictures.slice(0, SIMILAR_PICTURE_COUNT));
  })
  .catch(() => {
    onErrorDataForm();
  });

setUserFormSubmit(closeUploadOverlay);
