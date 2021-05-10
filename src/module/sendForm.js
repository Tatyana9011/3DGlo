// eslint-disable-next-line strict
'use strict';
const sendForm = idForm => {
  const errorMessage = 'Что то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
    preloder = './../images/preloder/preloader.svg';

  const form = document.getElementById(idForm);
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;   color: blue;';
  const button = form.querySelector('button[type="submit"]');


  const validateInput = formAllInput => {
    const input = formAllInput.querySelectorAll('input');
    let error = 0;
    input.forEach(elem => {
      if (elem.classList.contains('error')) {
        error++;
      }
    });
    return error;
  };

  const postData = data => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const error = validateInput(form);
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
      form.reset();
      setTimeout(() => {
        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
        setTimeout(() => {
          statusMessage.textContent = '';
          statusMessage.remove();
        }, 5000);
      }, 3000);
    };
    if (error === 0) {
      form.append(statusMessage);
      button.insertAdjacentHTML('afterbegin', `
      <img alt='preloder' src=${preloder}>`);
      postData(body)
        .then(outputData)
        .catch(errorData)
        .then(resultEnd);
    }
  });
};
export default sendForm;
