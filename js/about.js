window.addEventListener('load', () => {
  const loader = document.querySelector('.loading');
  loader.className += ' hidden'; // class "loader hidden"
});

const nav = document.getElementById('hamburger');
const popup = document.getElementById('popup');
nav.addEventListener('click', () => {
  nav.classList.toggle('open');
  popup.classList.toggle('hide-popup');
  popup.style.left = 0;
});