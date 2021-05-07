// eslint-disable-next-line strict
'use strict';
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
export default toggleMenu;
