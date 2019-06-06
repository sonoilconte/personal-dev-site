const form = document.querySelector('form');
const formElements = Array.from(form);
const resultMessageDiv = document.getElementById('result-message');

function onSubmitMessage() {
  window.setTimeout(() => {
    form.classList.toggle('default-no-display', true);
    resultMessageDiv.classList.toggle('display', true);
    formElements.forEach(el => {
      if (el.value) {
        el.value = "";
      }
    });
  }, 2000);
}

function readyFormDisplay() {
  form.classList.toggle('default-no-display', false);
  resultMessageDiv.classList.toggle('display', false);
}

function onSuccess() {
  resultMessageDiv.insertAdjacentHTML('beforeend', '&#9989');
}

function onFailure() {
  resultMessageDiv.innerHTML = 'There was problem sending your info. Please contact me on <a href="https://www.linkedin.com/in/sepphammer/">LinkedIn</a>';
}

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = {};
  formElements.map((el) => {
    if (el.name && el.value) {
      return formData[el.name] = el.value;
    }
  });

  // const url = 'http://localhost:7071/api/sendEmail';
  const url = 'https://staticsitefaas.azurewebsites.net/api/sendemail?code=YB8fIvTsC35ONblda9VppzqUNTzJWTkU0RsEgUxcLabiZ9HeBwtNWQ==';
  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    data: formData
  };

  axios(options)
  .then(res => {
    console.log(res);
    onSuccess();
  })
  .catch(err => {
    console.log(err);
    onFailure();
  });

  onSubmitMessage();
}
