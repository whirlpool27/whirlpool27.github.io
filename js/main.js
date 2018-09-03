// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');
const main = document.getElementById('home');

// Set Initial State Of Menu
var menuVisibility = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  // open nav
  if (menuVisibility == false) {
    showMenu();
  } else {
    hideMenu();
  }
}

function openHome() {
  main.style.display = 'block';
  hideMenu();
}

function openAbout() {
  hideContent(main);
  hideMenu();
}

function hideContent(id) {
  id.style.display = 'none';
}

function showMenu() {
  menuBtn.classList.add('close');
  sideNav.style.width = '20%';
  main.style.marginLeft = '20%';

  // Set Menu State
  menuVisibility = true;
}

function hideMenu() {
  menuBtn.classList.remove('close');
  sideNav.style.width = '0';
  main.style.marginLeft = '0';

  // Set Menu State
  menuVisibility = false;
}
