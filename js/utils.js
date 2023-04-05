const ALERT_SHOW_TIME = 8000;
const getRandomInteger = function (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const createArrayElement = (elements) => (
  elements[getRandomInteger(0, elements.length - 1)]
);

const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this,rest),timeoutDelay);
  };
};

const comparePhotos = (photoA, photoB) => {
  const commentA = photoA.comments.length;
  const commentB = photoB.comments.length;
  return commentB - commentA;
};

const sortDiscussed = (photos) => photos.slice().sort(comparePhotos);

const getRandomElementArray = (array) => array[getRandomInteger(0, array.length - 1)];
const getRandomArray = (array, countElement) => {
  if (array.length <= countElement) {
    return array;
  }

  let resultArray = [];
  while (resultArray.length !== countElement) {
    resultArray.push(getRandomElementArray(array));
    resultArray = Array.from(new Set(resultArray));
  }
  return resultArray;
};

export {
  getRandomInteger,
  createIdGenerator,
  createArrayElement,
  isEscapeKey,
  showErrorAlert,
  debounce,
  sortDiscussed,
  getRandomArray
};
