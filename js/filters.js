import { sortDiscussed, getRandomArray } from './utils.js';

const COUNT_RANDOM_PHOTO = 10;
const filterForm = document.querySelector('.img-filters');

const toggleFilter = (choosen) => {
  const currentFilter = document.querySelector('.img-filters__button--active');
  currentFilter.classList.remove('img-filters__button--active');
  choosen.classList.add('img-filters__button--active');
};

const setFilterClickHandler = (data, cb) => {
  filterForm.addEventListener('click', (evt) => {
    switch (evt.target.id) {
      case 'filter-random':
        toggleFilter(evt.target);
        cb(getRandomArray(data, COUNT_RANDOM_PHOTO));
        break;

      case 'filter-discussed':
        toggleFilter(evt.target);
        cb(sortDiscussed(data));
        break;

      case 'filter-default':
        toggleFilter(evt.target);
        cb(data);
        break;
    }
  });
};

export { setFilterClickHandler };
