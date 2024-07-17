import { indefications, formUpload } from './const';

const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

const regularHashtag = /^#[a-zа-яё0-9]{1,19}$/i; //- регулярное выражение

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: '.img-upload__field-wrapper--error'
});

const checkRegularHashtag = (value) => regularHashtag.test(value);

pristine.addValidator(
  hashtags,
  checkRegularHashtag,
  'Введён невалидный хэштег'
);

// - хэштеги разделяются пробелами;!!!!!!

// - хэштеги необязательны;

// - если фокус находится в поле ввода хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения

function validateHashtags (value) {
  const tags = value.split(' ');
  return tags.length <= indefications.MAXHASHTAGCOUNT;
}

pristine.addValidator(
  hashtags,
  validateHashtags,
  'Превышено количество хэштегов'
);

const checkSimilarHashtags = (value) => {
  const tags = value.toLowerCase().split(' ');
  return new Set(tags).size === tags.length;
};

pristine.addValidator(
  hashtags,
  checkSimilarHashtags,
  'Хэштеги повторяются'
);

function validateDescription (string) {
  return string.length <= indefications.MAXCOMMENTSDESRIPTIONS;
}

pristine.addValidator(
  comment,
  validateDescription,
  'Длина комментария больше 140 символов'
);

// Реализовать логику проверки: валидна - срабатывает, не валидна - форма не отправляется.!!!!!!!!

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
