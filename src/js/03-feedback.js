import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const messageRef = document.querySelector('.feedback-form textarea');
const emailRef = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

fillForm();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const inputFormObj = {
    email: formRef.email.value,
    message: formRef.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputFormObj));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
}

function fillForm() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    emailRef.value = savedFormData.email;
    messageRef.value = savedFormData.message;
  }
}
