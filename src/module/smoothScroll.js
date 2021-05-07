// eslint-disable-next-line strict
'use strict';
const smoothScroll = () => {
  const scrollBlocks = document.querySelectorAll('a[href]');

  for (const scrollBlock of scrollBlocks) {

    scrollBlock.addEventListener('click', event => {
      event.preventDefault();

      const id = scrollBlock.getAttribute("href");

      if (id !== '#') {
        const getId = document.querySelector(id);

        if (getId !== null) {
          getId.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  }
};
export default smoothScroll;
