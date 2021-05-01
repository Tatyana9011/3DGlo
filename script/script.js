document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  'use strict';
  const date = '21 july 2022';
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds'),
    addZero = n => (n < 10 ? "0" + n : n);

  //Timer
  const countTimer = deadline => {
    const timer = getTimeRemaining();

    function getTimeRemaining() {
      const deteStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (deteStop - dateNow) / 1000,  //сколько осталось времени в мили секундах
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24;
      return { timeRemaining, hours, minutes, seconds };
    }
    function updateClock() {
      if (timer.timeRemaining > 0) {
        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);
      } else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
      return timer;
    }

    updateClock();
    return timer;
  };

  const timerNumber = countTimer(date);
  let clearID;
  if (timerNumber.timeRemaining >= 0) {
    clearID = setInterval(countTimer, 1000, date);
  } else {
    clearInterval(clearID);
  }

  //меню
  const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', event => {
      const target = event.target;

      if (target.classList.contains("close-btn") || target.closest('.menu')) {
        handlerMenu();
      } else if (!target.closest('menu') || target.closest("li")) {
        menu.classList.remove('active-menu');
      }
    });
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = document.querySelector('.popup-content');

    popupContent.style.top = 0 + 'px';
    popupContent.style.left = 0 + 'px';
    let countX = 0;
    let countY = 0;
    let startIdInterval;
    let animate = false;

    const startAnimate = () => {
      const middleX = (document.documentElement.clientWidth - 500) / 2;
      const middleY = (document.documentElement.clientHeight) / 2;

      if (countX < middleX && countY < middleY) {
        countX += 15;
        countY += 5;
        popupContent.style.top = countY + 'px';
        popupContent.style.left = countX + 'px';
        startIdInterval = requestAnimationFrame(startAnimate);
      } else {
        countX = 0;
        countY = 0;
        cancelAnimationFrame(startIdInterval);
      }
    };

    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
        if (!animate && document.documentElement.clientWidth > 768) {
          animate = true;
          startIdInterval = requestAnimationFrame(startAnimate);
          popup.style.display = 'block';
        } else {
          animate = false;
          popup.style.display = 'none';
          countX = 0;
          countY = 0;
          cancelAnimationFrame(startIdInterval);
        }
      });
    });

    popup.addEventListener('click', event => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        animate = false;
        cancelAnimationFrame(startIdInterval);
        popup.style.display = 'none';
        countX = 0;
        countY = 0;
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          animate = false;
          cancelAnimationFrame(startIdInterval);
          popup.style.display = 'none';
          countX = 0;
          countY = 0;
        }
      }
    });
  };
  togglePopUp();

  //scroll
  const smoothScroll = () => {
    const scrollBlocks = document.querySelectorAll('a[href]');

    for (const scrollBlock of scrollBlocks) {

      scrollBlock.addEventListener('click', event => {
        event.preventDefault();

        const id = scrollBlock.getAttribute("href");

        if (id !== '#') {
          const getId = document.querySelector(id);

          if (getId !== null) {
            getId.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    }
  };
  smoothScroll();

  //tab
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

  //cлайдер
  const slider = () => {
    let currentSlide = 0, //номер слайда
      interval;

    const sliderContent = document.querySelector('.portfolio-content'),
      slide = document.querySelectorAll('.portfolio-item'),
      dots = document.querySelector('.portfolio-dots');

    const createDot = () => {
      const newDot = [];
      for (let i = 0; i < slide.length; i++) {
        newDot[i] = document.createElement('li');
        newDot[i].classList.add('dot');
        dots.append(newDot[i]);
      }
    };
    createDot();

    const dot = document.querySelectorAll('.dot');


    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    sliderContent.addEventListener('click', event => {
      event.preventDefault();

      const target = event.target;
      //если не попадаем на эти кнопки то событие не сробатывает
      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');


      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    //когда наводим мышку
    sliderContent.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn, .dot')) {
        stopSlide();
      }
    });

    //когда убираем мышку
    sliderContent.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn, .dot')) {
        startSlide(1000);
      }
    });


    startSlide(1000);



  };
  slider();

  //photo
  const changePhoto = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach(item => {
      item.addEventListener('mouseover', event => {
        const imagSrc = event.target.src;
        event.target.src = event.target.dataset.img;
        item.addEventListener('mouseout', () => {
          event.target.src = imagSrc;
        });
      });
    });
  };
  changePhoto();

  const validationAllInput = () => {
    const calcItem = document.querySelectorAll('.calc-item'),
      mess = document.querySelector('.mess'),
      nameInputs = document.querySelectorAll('#form1-name, #form2-name, #form3-name'),
      emailInputs = document.querySelectorAll('input[type="email"]'),
      phoneInputs = document.querySelectorAll('input[type="tel"]'),
      allInputs = document.querySelectorAll('input');

    const validateEmail = (elem, event) => {
      elem.value = event.target.value.replace(/\s{2,}/, '').replace(/[-]{2,}/, '-').replace(/[' '|/|,]/, '')
        .replace(/[_]{2,}/, '_').replace(/[.]{2,}/, '.').replace(/[@]{2,}/, '@').replace(/[а-яё]/ig, '');
    };

    const validatePhone = (elem, event) => {
      elem.value = event.target.value.replace(/[-]{2,}/, '-').replace(/[' ']{2,}/, ' ')
        .replace(/[_]{2,}/, '_').replace(/[+]{2,}/, '+').replace(/([а-яё]|[a-z]){1,}/, '');
    };

    const validateName = (elem, event) => {
      elem.value = event.target.value.replace(/\d|[a-z]/ig, '').replace(/^[ |-]/, '');
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
    mess.addEventListener('input', validateName.bind(this, mess));
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
        /* if (target.matches('input[type="email"]')) {
          if (target.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            input.value = target.value;
          } else {
            input.value = target.value.replace(target.value, '');
          }
        } */
        /* if (target.matches('input[type="tel"]')) {
          if (target.value.match(/\+?[78]([- ()]*\d){10}/)) {
            input.value = target.value;
          } else {
            input.value = target.value.replace(target.value, '');
          }
        } */
      });
    });

  };
  validationAllInput();

  //калькулятор
  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      totalValue = document.getElementById('total');

    const enumNumbersAnimation = total => {
      let count = 0;
      let idInterval;
      const flyAnimate = () => {
        idInterval = requestAnimationFrame(flyAnimate);
        if (Math.floor(total) > count) {
          count += 5;
          totalValue.textContent = '';
          totalValue.textContent += `${count}`;
        } else {
          cancelAnimationFrame(idInterval);
        }
      };
      let animate;
      if (!animate) {
        idInterval = requestAnimationFrame(flyAnimate);
        animate = true;
      } else {
        animate = false;
        cancelAnimationFrame(idInterval);
      }
    };

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      //значение берем с велуе у селектора в оптионс
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
      //что бы пока не ввели значение пользователю высвечивался 0
      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
        enumNumbersAnimation(total);
      }

    };

    calcBlock.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };
  calc(100);
});










