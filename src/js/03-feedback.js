const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;
let inputValues = {};

formEl.addEventListener('input', throttle(handlerInput, 500));
formEl.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  inputValues[evt.target.name] = evt.target.value;

  if (evt.target.name === 'email' && inputValues.message === undefined) {
    inputValues.message = '';
  } else if (evt.target.name === 'message' && inputValues.email === undefined) {
    inputValues.email = '';
  }
  console.log(inputValues);
  updateLocalStorage();
}

function handlerSubmit(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return;
  }
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}

function fillInputs() {
  try {
    const values = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (values && values.email !== undefined) {
      inputValues.email = values.email;
      email.value = values.email;
    }
    if (values && values.message !== undefined) {
      inputValues.message = values.message;
      message.value = values.message;
    }

    email.value = values.email !== undefined ? values.email : '';
    message.value = values.message !== undefined ? values.message : '';

    if (inputValues.email === undefined && inputValues.message !== undefined) {
      inputValues.email = '';
      inputValues.message = values.message;
    } else if (
      inputValues.email !== undefined &&
      inputValues.message === undefined
    ) {
      inputValues.message = '';
      inputValues.email = values.email;
    }
  } catch (err) {
    console.error(err);
  }
}
fillInputs();
