import 'bootstrap';

// navbar menu toggle
const menuToggle = document.querySelector('.toggle');
const page = document.querySelector('.page');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('.active');
  page.classList.toggle('.active');
});
