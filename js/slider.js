import { imgUploadPreview, FILTERSCONFIG } from './const';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const sliderElementBlock = document.querySelector('.img-upload__effect-level');
const specialElements = document.querySelectorAll('.effects__radio');
const specialElementsArray = Array.from(specialElements);

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
  unit: '',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
});

const defaultEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = 'none';
  sliderElementValue.value = 'none';
  imgUploadPreview.classList.add('effects__preview--none');
  sliderElementBlock.classList.add('hidden');
};

specialElementsArray.forEach((element) => {
  element.addEventListener('change', () => {
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add(`effects__preview--${element.value}`);
    if (element.value === 'none') {
      sliderElementBlock.classList.add('hidden');
      imgUploadPreview.style.filter = 'none';
      sliderElementValue.value = 'none';
    } else {
      sliderElementBlock.classList.remove('hidden');
    } if (element.value === 'chrome') {
      sliderElement.noUiSlider.updateOptions(FILTERSCONFIG.chrome);
    } if (element.value === 'sepia') {
      sliderElement.noUiSlider.updateOptions(FILTERSCONFIG.sepia);
    } if (element.value === 'marvin') {
      sliderElement.noUiSlider.updateOptions(FILTERSCONFIG.marvin);
    } if (element.value === 'phobos') {
      sliderElement.noUiSlider.updateOptions(FILTERSCONFIG.phobos);
    } if (element.value === 'heat') {
      sliderElement.noUiSlider.updateOptions(FILTERSCONFIG.phobos);
    }
  });
});

export { defaultEffect };
