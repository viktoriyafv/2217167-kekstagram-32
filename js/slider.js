import { imgUploadPreview, FILTERSCONFIG } from './const.js';

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
  imgUploadPreview.classList.add('effects__preview--none');
  sliderElementBlock.classList.add('hidden');
};

const setFilter = (filter) => {
  sliderElementBlock.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(filter.options);
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    sliderElementValue.value = values[handle];
  });
};

specialElementsArray.forEach((element) => {
  element.addEventListener('change', () => {
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add(`effects__preview--${element.value}`);
    if (element.value === 'none') {
      sliderElementBlock.classList.add('hidden');
    } else if (element.value === 'chrome') {
      setFilter(FILTERSCONFIG.chrome);
    } else if (element.value === 'sepia') {
      setFilter(FILTERSCONFIG.sepia);
    } else if (element.value === 'marvin') {
      setFilter(FILTERSCONFIG.marvin);
    } else if (element.value === 'phobos') {
      setFilter(FILTERSCONFIG.phobos);
    } else if (element.value === 'heat') {
      setFilter(FILTERSCONFIG.phobos);
    }
  });
});

export { defaultEffect };
