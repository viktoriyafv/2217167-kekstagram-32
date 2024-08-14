import { isEscapeKey, onEscKeydownClick } from './util.js';
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

const onCloseMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMessageWindow();
  }
  return document.addEventListener('keydown', onEscKeydownClick);
};

function closeMessageWindow() {
  const successSectionElement = document.querySelector('.success');
  const errorSectionElement = document.querySelector('.error');

  if (successSectionElement) {
    successSectionElement.remove();
  }

  if (errorSectionElement) {
    errorSectionElement.remove();
  }
  document.addEventListener('keydown', onCloseMessageEscKeydown);
}

const onCloseMessageClick = (evt) => {
  if (evt.target.closest('section')) {
    closeMessageWindow();
  }
};

const openSuccessForm = () => {
  const cloneSuccessElement = succesMessage.cloneNode(true);
  const successButtonElement = cloneSuccessElement.querySelector('.success__button');
  body.append(cloneSuccessElement);

  document.addEventListener('click', onCloseMessageClick);
  document.addEventListener('keydown', onCloseMessageEscKeydown);
  successButtonElement.addEventListener('click', closeMessageWindow);
};

const openErrorForm = () => {
  const cloneErrorElement = errorMessage.cloneNode(true);
  const errorButtonElement = cloneErrorElement.querySelector('.error__button');
  body.append(cloneErrorElement);

  document.addEventListener('click', onCloseMessageClick);
  document.addEventListener('keydown', onCloseMessageEscKeydown);
  errorButtonElement.addEventListener('click', closeMessageWindow);
  document.removeEventListener('keydown', onEscKeydownClick);
};

const openErrorDataForm = () => {
  const cloneErrorDataElement = errorDataMessage.cloneNode(true);
  body.append(cloneErrorDataElement);
  setTimeout(() => {
    cloneErrorDataElement.remove();
  }, Indefications.ERROR_DATA_TIMEOUT_MS);
};

export { openSuccessForm, openErrorForm, openErrorDataForm };
