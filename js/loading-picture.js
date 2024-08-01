import { FILE_TYPES } from './const.js';

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const fileChooser = document.querySelector('.img-upload__start input[type=file]');

const loadingPicture = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      imgUploadPreview.src = URL.createObjectURL(file);
    }
  });
};

export { loadingPicture };
