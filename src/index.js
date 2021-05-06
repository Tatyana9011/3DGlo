// eslint-disable-next-line strict
'use strict';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import validationAllInput from './modules/validationAllInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

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
