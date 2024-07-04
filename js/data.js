import { getRandomInteger, getRandomIdentifier, getRandomArrayElement, } from './util.js';
import { NAMES, MESSAGES, DESCRIPTIONS, MAXAVATARNUMBER, MAXPHOTOID, MAXPHOTOURL, MINLIKES, MAXLIKES, MAXCOMMENTS, keksId } from './const.js';

const idPhoto = getRandomIdentifier(1, MAXPHOTOID);
const idUser = getRandomIdentifier();
const urlPhoto = getRandomIdentifier(1, MAXPHOTOURL);

const createRandomComment = () => ({
  id: idUser(),
  avatar: `img/avatar-${getRandomInteger(1, MAXAVATARNUMBER)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)
});

const createKeksObject = () => ({
  id: idPhoto(),
  url: `photos/${urlPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MINLIKES, MAXLIKES),
  comments: Array.from({ length: getRandomInteger(0, MAXCOMMENTS) }, createRandomComment)
});

const similarObject = () => Array.from({ length: keksId }, createKeksObject);

export { similarObject };

