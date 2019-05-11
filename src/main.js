const burgerButton = document.querySelector('.navbar__button');
const navMenu  =document.querySelector('.navbar__menu');

burgerButton.addEventListener('click', () =>{
  navMenu.classList.toggle('visible');
});


