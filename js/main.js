import { getData } from './api.js';
import { showPictures } from './thumbnails.js';
import { setFilterClickHandler } from './filters.js';
import { showErrorAlert, debounce } from './utils.js';
import './preview-picture.js';
import './form.js';
import './scale.js';
import './effects.js';

const RERENDER_DELAY = 500;

getData((data) => {
  showPictures(data);
  setFilterClickHandler(data, debounce(showPictures, RERENDER_DELAY));
},

() => {
  showErrorAlert('Не удалось загрузить изображения.');
}
);
