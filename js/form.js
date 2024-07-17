import { body, formUpload } from './const.js';
import { isEscapeKey } from './util.js';
import './valid.js';

//const imgUploadStart = formUpload.querySelector('.img-upload-start');
const imgUploadCancel = formUpload.querySelector('.img-upload__cancel');
const imgUpload = formUpload.querySelector('.img-upload__input');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');

const openUploadOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', isEscapeKey);
};

const closeUploadOverlay = () => {
  formUpload.reset();
  //pristine.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', isEscapeKey);
};

imgUpload.addEventListener('change', () => {
  openUploadOverlay();
});

imgUploadCancel.addEventListener('click', () => {
  closeUploadOverlay();
});
