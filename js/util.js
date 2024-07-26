import { closeUploadOverlay } from './form.js';
import { closeBigPicture } from './big-picture.js';
import { onErrorForm } from './success-error.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIdentifier = (a = 0,b = 1000)=>{
  const idNumber = [];
  return function (){
    let randomId = 0;
    do {
      randomId = getRandomInteger(a,b);
    } while (idNumber.includes(randomId));
    idNumber.push(randomId);
    return randomId;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const onEscKeydown = (evt) => {
  const inputFocus = evt.target.matches('input.text__hashtags:focus') || evt.target.matches('textarea.text__description:focus');
  if (isEscapeKey(evt) && !inputFocus && !onErrorForm) {
    evt.preventDefault();
    closeUploadOverlay();
    closeBigPicture();
  }
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export { getRandomInteger, getRandomIdentifier, getRandomArrayElement, isEscapeKey, isEnterKey, onEscKeydown, debounce, throttle };
