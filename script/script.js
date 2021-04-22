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
        timeRemaining = (deteStop - dateNow) / 1000,
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
  if (timerNumber.timeRemaining >= 0) {
    setInterval(countTimer, 1000, date);
  } else {
    clearInterval(2);
  }

  //меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();
  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popUpClose = document.querySelector('.popup-close'),
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
    popUpClose.addEventListener('click', () => {
      animate = false;
      cancelAnimationFrame(startIdInterval);
      popup.style.display = 'none';
      countX = 0;
      countY = 0;
    });
  };
  togglePopUp();
  //scroll

  function smoothScroll() {
    const scrollBlocks = document.querySelectorAll('a[href="#service-block"]');

    for (const scrollBlock of scrollBlocks) {
      scrollBlock.addEventListener('click', event => {
        event.preventDefault();
        const id = scrollBlock.getAttribute("href");
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }
  smoothScroll();

});

