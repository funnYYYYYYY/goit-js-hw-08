import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onImputValue, 500));

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.clear();
}

let formData = {};

function onImputValue(e) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onInputSaveValue() {
  const onInputValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!onInputValue) {
    return;
  } else {
    refs.input.value = onInputValue.email || '';
    refs.textarea.value = onInputValue.message || '';
  }
}
onInputSaveValue();
