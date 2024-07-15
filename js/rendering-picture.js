import { openBigPicture } from './big-picture.js';
import { similarObject } from './data.js';
import { isEnterKey} from './util.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPicture = similarObject(25);

const similarListFragment = document.createDocumentFragment();

similarPicture.forEach(({id, url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').dataset.id = id;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(pictureElement);

  pictureElement.addEventListener('click', () => {
    openBigPicture({url, description, likes, comments});
  });

  pictureElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openBigPicture({url, description, likes, comments});
    }
  });

  return pictureElement;
});

picturesContainer.append(similarListFragment);
