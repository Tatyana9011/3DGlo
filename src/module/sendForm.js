// eslint-disable-next-line strict
'use strict';
const sendForm = idForm => {
  const errorMessage = 'Что то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
    preloder = './../images/preloder/preloader.svg';

  const form = document.getElementById(idForm);
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;   color: blue;';

  const postData = data => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  form.addEventListener('submit', event => {
    //item.removeAttribute("disabled");
    event.preventDefault();
    form.append(statusMessage);
    const button = form.querySelector('button[type="submit"]');
    button.insertAdjacentHTML('afterbegin', `
      <img alt='preloder' src=${preloder}>`);

    const formData = new FormData(form);
    const body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    const outputData = response => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      button.textContent = 'Оставить заявку!';
      statusMessage.textContent = successMessage;
    };
    const errorData = err => {
      button.textContent = 'Оставить заявку!';
      statusMessage.textContent = errorMessage;
      console.error(err);
    };

    const resultEnd = () => {
      setTimeout(() => {
        statusMessage.textContent = '';
        statusMessage.remove();
        form.reset();
      }, 5000);
    };

    postData(body)
      .then(outputData)
      .catch(errorData)
      .then(resultEnd);
  });
};
export default sendForm;
