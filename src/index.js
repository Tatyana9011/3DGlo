// eslint-disable-next-line strict
'use strict';

import countTimer from './module/countTimer';
import toggleMenu from './module/toggleMenu';
import togglePopUp from './module/togglePopUp';
import smoothScroll from './module/smoothScroll';
import tabs from './module/tabs';
import slider from './module/slider';
import changePhoto from './module/changePhoto';
import validationAllInput from './module/validationAllInput';
import calc from './module/calc';
import sendForm from './module/sendForm';

//Timer
const timerNumber = countTimer();
let clearID;
if (timerNumber.timeRemaining >= 0) {
  clearID = setInterval(countTimer, 1000);
} else {
  clearInterval(clearID);
}
//меню
toggleMenu();
//popup
togglePopUp();
//scroll
smoothScroll();
//tab
tabs();
//cлайдер
slider();
//photo
changePhoto();
//validation
validationAllInput();
//калькулятор
calc(100);
//send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');
