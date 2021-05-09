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
    const totalEnd = 200;
    let idInterval;
    const flyAnimate = () => {
      idInterval = requestAnimationFrame(flyAnimate);
      if (totalEnd > count && total > count) {
        count += 10;
        totalValue.textContent = '';
        totalValue.textContent += `${count}`;
      } else {
        cancelAnimationFrame(idInterval);
        totalValue.textContent = total;
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
    } else {
      dayValue *= 1;
    }
    //что бы пока не ввели значение пользователю высвечивался 0
    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }
    if (total) {
      enumNumbers(Math.floor(total));
      totalValue.textContent += `${Math.floor(total)}`;
    }
  };

  calcBlock.addEventListener('input', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};

export default calc;
