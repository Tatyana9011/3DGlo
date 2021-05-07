// eslint-disable-next-line strict
'use strict';
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
  dot[0].classList.add('dot-active');
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
export default slider;
