import { getRandomInteger, getRandomIdentifier, getRandomArrayElement, } from './util.js';
import { NAMES, MESSAGES, DESCRIPTIONS, Indefications } from './const.js';

const idPhoto = getRandomIdentifier(1, Indefications.MAX_PHOTO_ID);
const idUser = getRandomIdentifier();
const urlPhoto = getRandomIdentifier(1, Indefications.MAX_PHOTO_URL);

const createRandomComment = () => ({
  id: idUser(),
  avatar: `img/avatar-${getRandomInteger(1, Indefications.MAX_AVATAR_NUMBER)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)
});

const createKeksObject = () => ({
  id: idPhoto(),
  url: `photos/${urlPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(Indefications.MIN_LIKES, Indefications.MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, Indefications.MAX_COMMENTS) }, createRandomComment)
});

const similarObject = (count) => Array.from({ length: count }, createKeksObject);

export { similarObject, createRandomComment };

