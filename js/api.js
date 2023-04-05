const getData = (onSuccess, onFail) => {
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => onFail('Произошла ошибка при загрузки данных'));
};

const sendData = (data, success, error, hide, button) => {
  fetch(
    'https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data,
    },
  ) .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
    .then(() => {
      success();
      hide();
    })
    .catch(() => {
      error();
    })
    .finally(button);
};

export { getData, sendData };
