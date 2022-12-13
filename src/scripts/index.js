const menuButton = document.querySelector('.menu-burger');

const toggleMenuButton = () => {
  menuButton.classList.toggle('active');
};

menuButton.addEventListener('click', toggleMenuButton);