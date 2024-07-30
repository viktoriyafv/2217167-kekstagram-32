import { indefications, formUpload } from './const';
import { sendData } from './api.js';
import { onSuccessForm, onErrorForm } from './success-error.js';
import { closeUploadOverlay } from './form.js';

const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const regularHashtag = /^#[a-zа-яё0-9]{1,19}$/i; //- регулярное выражение

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: '.img-upload__field-wrapper--error'
});

const checkRegularHashtag = (value) => regularHashtag.test(value); // проверка регулярного выржания

function checkValidHashtag(value) {
  return value === '' || value.split(' ').every(checkRegularHashtag); //проверка каждого элемента массива
}

pristine.addValidator(
  hashtags,
  checkValidHashtag,
  'Введён невалидный хэштег'
);

function validateHashtags(value) {
  const tags = value.split(' ');
  return tags.length <= indefications.MAXHASHTAGCOUNT; //максимальное количество хештегов
}

pristine.addValidator(
  hashtags,
  validateHashtags,
  'Превышено количество хэштегов'
);

function checkSimilarHashtags(value) {
  const tags = value.toLowerCase().split(' ');
  return new Set(tags).size === tags.length; // один и тот же хэштег не может быть использован дважды;
}

pristine.addValidator(
  hashtags,
  checkSimilarHashtags,
  'Хэштеги повторяются'
);

function checkDescriptionLength(value) {
  return value.length <= indefications.MAXCOMMENTSLENGTH; // максимальная длинна комментария
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
          onSuccessForm();
        })
        .catch(() => {
          onErrorForm();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { setUserFormSubmit };
