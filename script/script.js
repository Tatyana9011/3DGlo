document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  'use strict';
  const date = '21 july 2021';
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');
  const addZero = n => (n < 10 ? "0" + n : n);
  //Timer
  function countTimer(deadline) {
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
  }
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
    const middleX = (document.documentElement.clientWidth - 500) / 2;
    const middleY = (document.documentElement.clientHeight) / 2;
    function startAnimate() {
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
    }
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
















});

