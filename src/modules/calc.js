// eslint-disable-next-line strict
'use strict';

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

export default calc;