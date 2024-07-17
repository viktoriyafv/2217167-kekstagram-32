import { indefications, formUpload } from './const';

const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

const regularHashtag = /^#[a-fA-F0-9]{1,19}$/.i; //- регулярное выражение

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: '.img-upload__field-wrapper--error'
});

// - проверка регулярного выражения

const checkHashtagRegExp = (value) => regularHashtag.test(value);

pristine.addValidator(
  hashtags,
  checkHashtagRegExp,
  'Введён невалидный хэштег'
);

// - хэштеги разделяются пробелами;

// - хэштеги необязательны;

// - если фокус находится в поле ввода хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения

//- нельзя указать больше пяти хэштегов;
function validateHashtags (value) {
  const tags = value.split(' ');
  return tags.length <= indefications.MAXHASHTAGCOUNT;
}

pristine.addValidator(
  hashtags,
  validateHashtags,
  'Превышено количество хэштегов'
);
// - один и тот же хэштег не может быть использован дважды;

const checkSimilarHashtags = (value) => {
  const tags = value.toLowerCase().split(' ');
  return new Set(tags).size === tags.length;
};

pristine.addValidator(
  hashtags,
  checkSimilarHashtags,
  'Хэштеги повторяются'
);

// длина комментария не может составлять больше 140 символов;

function validateDescription (value) {
  return value.length <= 140;
}

pristine.addValidator(
  comment,
  validateDescription,
  'Длина комментария больше 140 символов'
);

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    // форма срабатывает
  } else {
    // не дает отправить
  }
});
