const imgUploadPreview = document.querySelector('.img-upload__preview img');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = 1;

const reducingPictureSize = () => {
  currentScale -= 0.25;
  currentScale = Math.max(0.25, currentScale);
  scaleControlValue.value = `${currentScale * 100}%`;
  imgUploadPreview.style.transform = `scale(${currentScale})`;
};

const increasePictureSize = () => {
  currentScale += 0.25;
  currentScale = Math.min(1, currentScale);
  scaleControlValue.value = `${currentScale * 100}%`;
  imgUploadPreview.style.transform = `scale(${currentScale})`;
};

const scaleControl = () => {
  scaleControlSmaller.addEventListener('click', reducingPictureSize);
  scaleControlBigger.addEventListener('click', increasePictureSize);
};

const scaleCancel = () => {
  scaleControlSmaller.removeEventListener('click', reducingPictureSize);
  scaleControlBigger.removeEventListener('click', increasePictureSize);
  imgUploadPreview.style.transform = 'scale(1)';
  currentScale = 1;
};

export { scaleControl, scaleCancel };
