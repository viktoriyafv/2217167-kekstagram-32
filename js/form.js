import {clickOnEscKeydown } from './util.js';
import { defaultEffect, ChangeEffect } from './slider.js';
import { scaleControl, scaleCancel } from './editing-picture.js';

const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadCancel = formUpload.querySelector('.img-upload__cancel');
const imgUpload = formUpload.querySelector('.img-upload__input');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');

function openUploadOverlay () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', clickOnEscKeydown);
  defaultEffect();
  ChangeEffect();
  scaleControl();
}

function closeUploadOverlay () {
  formUpload.reset();
  imgUploadPreview.style.transform = `scale(${1})`;
  defaultEffect();
  scaleCancel();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', clickOnEscKeydown);
}

imgUpload.addEventListener('change', () => {
  openUploadOverlay();
});

imgUploadCancel.addEventListener('click', () => {
  closeUploadOverlay();
});

export { openUploadOverlay, closeUploadOverlay };
