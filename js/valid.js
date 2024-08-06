import { REGULAR_HASHTAG, Indefications } from './const.js';
import { sendData } from './api.js';
import { openSuccessForm, openErrorForm } from './success-error.js';
import { closeUploadOverlay } from './form.js';

const formUpload = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: '.img-upload__field-wrapper--error'
});

const checkRegularHashtag = (value) => REGULAR_HASHTAG.test(value);

function checkValidHashtag(value) {
  return value === '' || value.split(' ').every(checkRegularHashtag);
}

pristine.addValidator(
  hashtags,
  checkValidHashtag,
  'Введён невалидный хэштег'
);

function validateHashtags(value) {
  const tags = value.split(' ');
  return tags.length <= Indefications.MAX_HASHTAG_COUNT;
}

pristine.addValidator(
  hashtags,
  validateHashtags,
  'Превышено количество хэштегов'
);

function checkSimilarHashtags(value) {
  const tags = value.toLowerCase().split(' ');
  return new Set(tags).size === tags.length;
}

pristine.addValidator(
  hashtags,
  checkSimilarHashtags,
  'Хэштеги повторяются'
);

function checkDescriptionLength(value) {
  return value.length <= Indefications.MAX_COMMENTS_LENGTH;
}

pristine.addValidator(
  comment,
  checkDescriptionLength,
  'Длина комментария больше 140 символов'
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(() => {
          pristine.reset();
          closeUploadOverlay();
          openSuccessForm();
        })
        .catch(() => {
          openErrorForm();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { setUserFormSubmit };
