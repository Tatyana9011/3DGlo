// eslint-disable-next-line strict
'use strict';
const changePhoto = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');
  commandPhoto.forEach(item => {
    const changImg = () => {
      const src = item.src;
      const otherSrc = item.dataset.img;
      item.src = otherSrc;
      item.dataset.img = src;
    };
    item.addEventListener('mouseover', changImg);
    item.addEventListener('mouseout', changImg);
  });
};
export default changePhoto;
