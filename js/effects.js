const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
  },

  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },

  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },

  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const filterRange = document.querySelector('.effect-level__slider');
const filterInput = document.querySelector('.effect-level__value');
const effectLevelBox = document.querySelector('.img-upload__effect-level');
const formUpload = document.querySelector('.img-upload__form');
const filterPreview = document.querySelector('.img-upload__preview img');
const effectsClass = 'effects__preview--';

const noneEffect = EFFECTS[0];
let chosenEffect = noneEffect;

filterInput.value = 0;

noUiSlider.create(filterRange, {
  range: {
    min: noneEffect.min,
    max: noneEffect.max,
  },
  start: noneEffect.max,
  step: noneEffect.step,
  connect: 'lower',
});

const updateSlider = () => {
  isDefault();
  filterRange.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
};

function isDefault () {
  if (chosenEffect === noneEffect) {
    effectLevelBox.classList.add('hidden');
    filterPreview.style.filter = 'none';
  } else {
    effectLevelBox.classList.remove('hidden');
  }
}

const resetEffects = () => {
  chosenEffect = noneEffect;
  updateSlider();
};

formUpload.addEventListener('change', (event) => {
  if (event.target.classList.contains('effects__radio')) {
    filterPreview.className = 'img-upload__preview';
    const effectsID = event.target.value;
    filterPreview.classList.add(`${effectsClass}${effectsID}`);
    chosenEffect = EFFECTS.find((effect) => effect.name === effectsID);
    updateSlider();
  }
});

filterRange.noUiSlider.on('update', () => {
  filterInput.value = filterRange.noUiSlider.get();
  filterPreview.style.filter = `${chosenEffect.filter}(${filterInput.value}${chosenEffect.unit})`;
}
);

export { resetEffects };
