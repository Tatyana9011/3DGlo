// eslint-disable-next-line strict
'use strict';
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

  const enumNumbers = total => {
    let count = 0;
    let idInterval;
    const flyAnimate = () => {
      if (Math.floor(total) <= count) {
        cancelAnimationFrame(idInterval);
        totalValue.textContent = Math.floor(total);
        return;
      } else {
        idInterval = requestAnimationFrame(flyAnimate);
        count += 10;
        totalValue.textContent = '';
        totalValue.textContent += `${count}`;
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
  const debounce = (f, t) => {
    let lastCall = 0;
    let lastCallTimer = 0;
    return (...args) => {
      const previousCall = lastCall;
      lastCall = Date.now();
      if (previousCall && ((lastCall - previousCall) <= t)) {
        clearInterval(lastCallTimer);
      }
      lastCallTimer = setTimeout(() => f(...args), t);
    };
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
    } else {
      dayValue *= 1;
    }
    //что бы пока не ввели значение пользователю высвечивался 0
    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }
    debounce(enumNumbers(total), 300);
  };

  calcBlock.addEventListener('input', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};

export default calc;
