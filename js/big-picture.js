import { onEscKeydown } from './util.js';
import { Indefications, body } from './const.js';
import { renderCommentsList } from './rendering-comments.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButtonPicture = bigPicture.querySelector('.big-picture__cancel');

const renderPictureDetails = ({ url, likes, description, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  if (Indefications.COMMENTS_AMOUNT >= comments.length) {
    bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length;
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
    bigPicture.querySelector('.social__comment-shown-count').textContent = Indefications.COMMENTS_AMOUNT;
  }
};

const openBigPicture = (data) => {
  let commentShown = 5;
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
  renderPictureDetails(data);
  renderCommentsList(data.comments.slice(0, Indefications.COMMENTS_AMOUNT));
  commentsLoader.addEventListener('click', () => {
    commentShown += Indefications.COMMENTS_AMOUNT;
    const currentComments = data.comments.slice(0, commentShown);
    renderCommentsList(currentComments);
    if (commentShown >= data.comments.length) {
      bigPicture.querySelector('.social__comment-shown-count').textContent = data.comments.length;
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
      bigPicture.querySelector('.social__comment-shown-count').textContent = commentShown;
    }
  });
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

closeButtonPicture.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture, closeBigPicture, renderPictureDetails };
