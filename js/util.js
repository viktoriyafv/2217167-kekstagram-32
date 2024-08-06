import { closeUploadOverlay } from './form.js';
import { closeBigPicture } from './big-picture.js';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const clickOnEscKeydown = (evt) => {
  const inputFocus = evt.target.matches('input.text__hashtags:focus') || evt.target.matches('textarea.text__description:focus');
  if (isEscapeKey(evt) && !inputFocus) {
    evt.preventDefault();
    closeUploadOverlay();
    closeBigPicture();
  }
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const shuffle = (length) => {
  const numbers = [];
  for (let i = 0; i < length; i++) {
    numbers[i] = i;
  }
  for (let i = length - 1; i > 0; i--) {
    const j = getRandomInteger(0, i);
    const swap = numbers[j];
    numbers[j] = numbers[i];
    numbers[i] = swap;
  }
  return numbers;
};

export { isEscapeKey, isEnterKey, clickOnEscKeydown, debounce, shuffle };
