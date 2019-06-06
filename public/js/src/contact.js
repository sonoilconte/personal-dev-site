const form = document.querySelector('form');

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = {};
  const formElements = Array.from(form);
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
  .then(res => console.log(res))
  .catch(err => console.log(err));
}
