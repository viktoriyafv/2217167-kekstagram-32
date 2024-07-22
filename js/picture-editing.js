import { imgUploadPreview } from './const';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');

let currentScale = 1;

scaleControlSmaller.addEventListener('click', () => {
  currentScale -= 0.25;
  currentScale = Math.max(0.25, currentScale);
  scaleControl.value = `${currentScale * 100 }%`;
  imgUploadPreview.style.transform = `scale(${currentScale})`;
});

scaleControlBigger.addEventListener('click', () => {
  currentScale += 0.25;
  currentScale = Math.min(1, currentScale);
  scaleControl.value = `${currentScale * 100 }%`;
  imgUploadPreview.style.transform = `scale(${currentScale})`;
});
