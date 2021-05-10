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
    elem.setAttribute('required', 'true');
    elem.value = event.target.value.replace(/[а-яё,\s]/, '').replace(/[_]{2,}/, '_')
      .replace(/[.]{2,}/, '.').replace(/[@]{2,}/, '@').replace(/[-]{2,}/, '-');
  };
  const validatePhone = (elem, event) => {
    elem.value = event.target.value.replace(/[^0-9 +]/, '');
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

  const itemPush = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "") {
        newArr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
    return newArr;
  };
  const blurValidateName = (elem, target) => {
    const getValue = target.value.trim().replace(/\s{2,}/, ' ').replace(/^[ |-]/, '')
      .replace(/[-]{2,}/, '-').split(" ");
    elem.value = itemPush(getValue).join(' ');
  };

  const blurValidateText = (elem, target) => {
    elem.value = target.value.trim().replace(/\s{2,}/, ' ').replace(/[-]{2,}/, '-').replace(/^[ |-]/, '');
  };

  const validateInputBlur = (target, elem, reg) => {
    if (reg) {
      elem.value = target.value;
      elem.classList.remove('error');
      elem.style.cssText = `border: none;`;
    } else {
      elem.classList.add('error');
      elem.style.cssText = `border: 2px solid red !important;`;
    }
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
        validateInputBlur(target, input, target.value !== '');
      }
      if (target.matches('#form1-name, #form2-name, #form3-name')) {
        blurValidateName(input, target);
        validateInputBlur(target, input, target.value !== '');
      }
      if (target.matches('input[type="email"]')) {
        validateInputBlur(target, input, target.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/));
      }
      if (target.matches('input[type="tel"]')) {
        validateInputBlur(target, input, target.value.match(/^(\+ |\+)?3?[78]?([- ()]*\d){10}$/));
      }
    });
  });
};

export default validationAllInput;
