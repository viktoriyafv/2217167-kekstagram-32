import { closeUploadOverlay } from './form.js';
import { closeBigPicture } from './big-picture.js';

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
  if (isEscapeKey(evt) && !inputFocus) {
    evt.preventDefault();
    closeUploadOverlay();
    closeBigPicture();
  }
};

export { getRandomInteger, getRandomIdentifier, getRandomArrayElement, isEscapeKey, isEnterKey, onEscKeydown };
