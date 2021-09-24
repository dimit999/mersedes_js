const burgerBtn = document.querySelector('.hamburger-menu');
const menuElem = document.querySelector('.menu');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  burgerBtn.classList.toggle('hamburger-menu-active');
};

burgerBtn.addEventListener('click', () => toggleMenu());

export default toggleMenu