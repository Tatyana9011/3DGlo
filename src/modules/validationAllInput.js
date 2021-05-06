// eslint-disable-next-line strict
'use strict';
const validationAllInput = () => {
  const calcItem = document.querySelectorAll('.calc-item'),
    mess = document.querySelector('.mess'),
    nameInputs = document.querySelectorAll('#form1-name, #form2-name, #form3-name'),
    emailInputs = document.querySelectorAll('input[type="email"]'),
    phoneInputs = document.querySelectorAll('input[type="tel"]'),
    allInputs = document.querySelectorAll('input');

  const validateEmail = (elem, event) => {
    elem.value = event.target.value.replace(/[а-яё,\s]/, '').replace(/[_]{2,}/, '_')
      .replace(/[.]{2,}/, '.').replace(/[@]{2,}/, '@').replace(/[-]{2,}/, '-');
  };
  const validatePhone = (elem, event) => {
    elem.value = event.target.value.replace(/[^0-9+]/, '');
    elem.value = event.target.value.replace(/[+]{2,}/, '+');
  };

  const validateName = (elem, event) => {
    elem.value = event.target.value.replace(/[^а-яё ]/ig, '');
  };
  const validateMess = (elem, event) => {
    elem.value = event.target.value.replace(/[^!а-яё 0-9.,-?]/ig, '');
  };

  const validateCalcItem = (elem, event) => {
    if (!event.target.matches('.calc-type')) {
      elem.value = event.target.value.replace(/\D/g, '');
    }
  };

  const blurValidateName = (elem, target) => {
    elem.value = target.value.trim().replace(/\s{2,}/, ' ').replace(/[-]{2,}/, '-').replace(/^[ |-]/, '')
      .replace(/^[а-я]/, match => match.toUpperCase());
  };

  const blurValidateText = (elem, target) => {
    elem.value = target.value.trim().replace(/\s{2,}/, ' ').replace(/[-]{2,}/, '-').replace(/^[ |-]/, '');
  };

  calcItem.forEach(input => input.addEventListener('input', validateCalcItem.bind(this, input)));
  mess.addEventListener('input', validateMess.bind(this, mess));
  nameInputs.forEach(item => item.addEventListener('input', validateName.bind(this, item)));
  phoneInputs.forEach(item => item.addEventListener('input', validatePhone.bind(this, item)));
  emailInputs.forEach(item => item.addEventListener('input', validateEmail.bind(this, item)));
  allInputs.forEach(input => {
    input.addEventListener('blur', event => {
      const target = event.target;
      if (target.matches('.mess')) {
        blurValidateText(input, target);
      }
      if (target.matches('#form1-name, #form2-name, #form3-name')) {
        blurValidateName(input, target);
      }
      if (target.matches('input[type="email"]')) {
        if (target.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
          input.value = target.value;
        } else {
          input.value = target.value.replace(target.value, '');
          alert("Введите валидное значение");
        }
      }
      if (target.matches('input[type="tel"]')) {
        if (target.value.match(/\+?[78]([- ()]*\d){10}/)) {
          input.value = target.value;
        } else {
          input.value = target.value.replace(target.value, '');
          alert("Введите валидное значение");
        }
      }
    });
  });
};
export default validationAllInput;
