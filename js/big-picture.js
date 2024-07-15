import { isEscapeKey } from './util.js';
import { indefications } from './const.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comment-count');
const closeButtonPicture = bigPicture.querySelector('.big-picture__cancel');

let commentShow = 0;

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const renderCommentsList = (comments) => {
  document.querySelector('.social__comments').textContent = '';
  comments.forEach((comment) => {
    const newCommentContainer = document.createElement('li');
    const userAvatar = document.createElement('img');
    newCommentContainer.className = 'social__comment';
    userAvatar.className = 'social__picture';
    userAvatar.src = comment.avatar;
    userAvatar.alt = comment.name;
    userAvatar.width = indefications.USERAVATARWIDTH;
    userAvatar.height = indefications.USERAVATARHEIGTH;
    const textComment = document.createElement('p');
    textComment.className = 'social__text';
    textComment.textContent = comment.message;
    newCommentContainer.appendChild(userAvatar);
    newCommentContainer.appendChild(textComment);
    commentsList.appendChild(newCommentContainer);
  });
};

const showMoreComments = (comments) => {
  commentShow += indefications.COMMENTSAMOUNT;
  const currentComments = comments.slice(0, commentShow);
  renderCommentsList(currentComments);

  if (commentShow >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
  socialComments.innerHTML = `${commentShow} из <span class="comments-count">${comments.length}</span> комментариев`;
};


const renderPictureDetails = ({ url, likes, description, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;

  if (indefications.COMMENTSAMOUNT >= comments.length) {
    bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length;
    commentsLoader.classList.add('hidden');
  } else {
    bigPicture.querySelector('.social__comment-shown-count').textContent = indefications.COMMENTSAMOUNT;
  }
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
  renderPictureDetails(data);
  showMoreComments(data.comments);
};

commentsLoader.addEventListener('click', (comments) => {
  showMoreComments(comments);
});

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

closeButtonPicture.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };
