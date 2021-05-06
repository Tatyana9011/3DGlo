// eslint-disable-next-line strict
'use strict';
const countTimer = () => {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds'),
    addZero = n => (n < 10 ? "0" + n : n);

  const getTimeRemaining = () => {
    const deteStop = new Date('21 july 2022').getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (deteStop - dateNow) / 1000,  //сколько осталось времени в мили секундах
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60) % 24;
    return { timeRemaining, hours, minutes, seconds };
  };

  const timer = getTimeRemaining();
  const updateClock = () => {
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
  };

  updateClock();
  return timer;
};

export default countTimer;
