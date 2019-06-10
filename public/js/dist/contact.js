"use strict";

var form = document.querySelector('form');
var formElements = Array.from(form);
var resultMessageDiv = document.getElementById('result-message');
var emailAlertElement = document.getElementById('email-alert');

function onSubmitMessage() {
  window.setTimeout(function () {
    window.scrollTo(0, stickyNavOffset); // see fade.js for stickyNavOffset

    form.classList.toggle('default-no-display', true);
    resultMessageDiv.classList.toggle('display', true);
    formElements.forEach(function (el) {
      if (el.value) {
        el.value = "";
      }
    });
  }, 2000);
}

function readyFormDisplay() {
  form.classList.toggle('default-no-display', false);
  resultMessageDiv.classList.toggle('display', false);
  emailAlertElement.innerHTML = '';
}

function onSuccess() {
  resultMessageDiv.insertAdjacentHTML('beforeend', '&#9989');
}

function onFailure() {
  resultMessageDiv.innerHTML = 'There was problem sending your info. Please contact me on <a href="https://www.linkedin.com/in/sepphammer/">LinkedIn</a>';
}

function validateFields(formData) {
  // For now, validate email address with simple regex
  return /(.+)@(.+){2,}\.(.+){2,}/.test(formData.email);
}

form.onsubmit = function (e) {
  e.preventDefault();
  var formData = {};
  formElements.map(function (el) {
    if (el.name && el.value) {
      return formData[el.name] = el.value;
    }
  });

  if (!validateFields(formData)) {
    emailAlertElement.innerHTML = 'Please enter a valid email';
    return;
  } // const url = 'http://localhost:7071/api/sendEmail';


  var url = 'https://staticsitefaas.azurewebsites.net/api/sendemail?code=YB8fIvTsC35ONblda9VppzqUNTzJWTkU0RsEgUxcLabiZ9HeBwtNWQ==';
  var options = {
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: formData
  };
  axios(options).then(function (res) {
    console.log(res);
    onSuccess();
  })["catch"](function (err) {
    console.log(err);
    onFailure();
  });
  onSubmitMessage();
};