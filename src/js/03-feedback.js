const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;
let inputValues = {};

formEl.addEventListener('input', throttle(handlerInput, 500));
formEl.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  inputValues[evt.target.name] = evt.target.value;
  updateLocalStorage();
}

function handlerSubmit(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Please fill all fields =)');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  delete inputValues.message;
  delete inputValues.email;
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}

function fillInputs() {
  //   try {
  const values = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (values.email) {
    inputValues.email = values.email;
    email.value = values.email;
  }
  if (values.message) {
    inputValues.message = values.message;
    message.value = values.message;
  }
}
fillInputs();
