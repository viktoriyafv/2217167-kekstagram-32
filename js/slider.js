import { FiltersConfig } from './const.js';
import { downloadPictures } from './download-picture.js';

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const sliderElementBlock = document.querySelector('.img-upload__effect-level');
const specialElements = document.querySelectorAll('.effects__radio');
const specialElementsArray = Array.from(specialElements);

downloadPictures();

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
  imgUploadPreview.style.filter = 'none';
};

const setFilter = (filter) => {
  sliderElementBlock.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(filter.options);
  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    sliderElementValue.value = values[handle];
  });
};

const ChangeEffect = () => {
  specialElementsArray.forEach((element) => {
    element.addEventListener('change', () => {
      imgUploadPreview.className = '';
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      switch (element.value) {
        case 'none':
          sliderElementBlock.classList.add('hidden');
          imgUploadPreview.style.filter = 'none';
          break;
        case 'chrome':
          setFilter(FiltersConfig.chrome);
          break;
        case 'sepia':
          setFilter(FiltersConfig.sepia);
          break;
        case 'marvin':
          setFilter(FiltersConfig.marvin);
          break;
        case 'phobos':
          setFilter(FiltersConfig.phobos);
          break;
        case 'heat':
          setFilter(FiltersConfig.heat);
          break;
      }
    });
  });
};
export { defaultEffect, ChangeEffect };
