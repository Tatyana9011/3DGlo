// eslint-disable-next-line strict
'use strict';
const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  popupContent.style.top = '';
  popupContent.style.left = '';
  let countX = 0;
  let countY = 0;
  let startIdInterval;
  let animate = false;

  const stopAnimate = id => {
    cancelAnimationFrame(id);
    popup.style.display = 'none';
    countX = 0;
    countY = 0;
    popupContent.style.top = '';
    popupContent.style.left = '';
  };

  const startAnimate = () => {

    const middleX = (document.body.clientWidth - 500) / 2;
    const middleY = (document.body.clientHeight) / 2;

    if (countX < middleX && countY < middleY) {
      countX += 10;
      countY += 1;
      popupContent.style.top = countY + 'px';
      popupContent.style.left = countX + 'px';
      startIdInterval = requestAnimationFrame(startAnimate);
    } else {
      stopAnimate(startIdInterval);
      popup.style.display = 'inline-block';
    }
  };

  popupBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      if (!animate && document.documentElement.clientWidth > 768) {
        animate = true;
        startIdInterval = requestAnimationFrame(startAnimate);
        popup.style.display = 'inline-block';
      } else {
        popup.style.display = 'inline-block';
        /* animate = false;
        stopAnimate(startIdInterval); */
      }
    });
  });

  popup.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      animate = false;
      stopAnimate(startIdInterval);
    } else {
      target = target.closest('.popup-content');

      if (!target) {
        animate = false;
        stopAnimate(startIdInterval);
      }
    }
  });
};
export default togglePopUp;
