import { isEscapeKey, clickOnEscKeydown } from './util.js';
import { Indefications } from './const.js';

const body = document.querySelector('body');
const succesMessage = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessage = document.querySelector('#error')
  .content
  .querySelector('.error');

const errorDataMessage = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const closeMessageOnEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onMessageCloseWindow();
  }
  return document.addEventListener('keydown', clickOnEscKeydown);
};

function onMessageCloseWindow() {
  const successSectionElement = document.querySelector('.success');
  const errorSectionElement = document.querySelector('.error');

  if (successSectionElement) {
    successSectionElement.remove();
  }

  if (errorSectionElement) {
    errorSectionElement.remove();
  }
  document.addEventListener('keydown', closeMessageOnEscKeydown);
}

const CloseMessage = (evt) => {
  if (evt.target.closest('section')) {
    onMessageCloseWindow();
  }
};

const openSuccessForm = () => {
  const cloneSuccessElement = succesMessage.cloneNode(true);
  const successButtonElement = cloneSuccessElement.querySelector('.success__button');
  body.append(cloneSuccessElement);

  document.addEventListener('click', CloseMessage);
  document.addEventListener('keydown', closeMessageOnEscKeydown);
  successButtonElement.addEventListener('click', onMessageCloseWindow);
};

const openErrorForm = () => {
  const cloneErrorElement = errorMessage.cloneNode(true);
  const errorButtonElement = cloneErrorElement.querySelector('.error__button');
  body.append(cloneErrorElement);

  document.addEventListener('click', CloseMessage);
  document.addEventListener('keydown', closeMessageOnEscKeydown);
  errorButtonElement.addEventListener('click', onMessageCloseWindow);
  document.removeEventListener('keydown', clickOnEscKeydown);
};

const openErrorDataForm = () => {
  const cloneErrorDataElement = errorDataMessage.cloneNode(true);
  body.append(cloneErrorDataElement);
  setTimeout(() => {
    cloneErrorDataElement.remove();
  }, Indefications.ERROR_DATA_TIMEOUT_MS);
};

export { openSuccessForm, openErrorForm, openErrorDataForm };
