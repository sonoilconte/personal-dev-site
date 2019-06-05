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
  const url = 'https://staticsitefaas.azurewebsites.net/api/sendemail?code=zarpFXawJ8sgsg7CQD86lne3p3Ay1UqTFB0vrGLXT50uamyfwapuPA==';
  const options = {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: formData
  };

  fetch(url, options)
  .then(res => console.log(res))
  .catch(err => console.log(err));

}
