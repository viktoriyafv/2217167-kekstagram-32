import { getRandomInteger, getRandomIdentifier, getRandomArrayElement, } from './util.js';
import { NAMES, MESSAGES, DESCRIPTIONS, indefications } from './const.js';

const idPhoto = getRandomIdentifier(1, indefications.MAXPHOTOID);
const idUser = getRandomIdentifier();
const urlPhoto = getRandomIdentifier(1, indefications.MAXPHOTOURL);

const createRandomComment = () => ({
  id: idUser(),
  avatar: `img/avatar-${getRandomInteger(1, indefications.MAXAVATARNUMBER)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)
});

const createKeksObject = () => ({
  id: idPhoto(),
  url: `photos/${urlPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(indefications.MINLIKES, indefications.MAXLIKES),
  comments: Array.from({ length: getRandomInteger(0, indefications.MAXCOMMENTS) }, createRandomComment)
});

const similarObject = (count) => Array.from({ length: count }, createKeksObject);

export { similarObject };

