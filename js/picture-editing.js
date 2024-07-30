import { imgUploadPreview } from './const';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = 1;

const onSmallerControlScale = () => {
  currentScale -= 0.25;
  currentScale = Math.max(0.25, currentScale);
  scaleControlValue.value = `${currentScale * 100}%`;
  imgUploadPreview.style.transform = `scale(${currentScale})`;
};

const onBiggerControlScale = () => {
  currentScale += 0.25;
  currentScale = Math.min(1, currentScale);
  scaleControlValue.value = `${currentScale * 100}%`;
  imgUploadPreview.style.transform = `scale(${currentScale})`;
};

const scaleControl = () => {
  scaleControlSmaller.addEventListener('click', onSmallerControlScale);
  scaleControlBigger.addEventListener('click', onBiggerControlScale);
};

const scaleCancel = () => {
  scaleControlSmaller.removeEventListener('click', onSmallerControlScale);
  scaleControlBigger.removeEventListener('click', onBiggerControlScale);
  imgUploadPreview.style.transform = 'scale(1)';
  currentScale = 1;
};

export { scaleControl, scaleCancel };
