// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');
const navItem = document.querySelector('.nav-item');
const home = document.querySelector('.home');
const work = document.querySelector('.work');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

// Set Initial State Of Menu
var menuVisibility = false;

// store current content id
// home = 0
// work = 1
// about = 2
// contact = 3
var currentContent = 0;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  // open nav
  if (menuVisibility == false) {
    showMenu();
  } else {
    hideMenu();
  }
}

function openNavLink(destinationID) {
  hideContent();
  displayContent(destinationID);
  currentContent = destinationID;
  toggleMenu();
}

function hideContent() {
  if (currentContent == 0) {
    home.style.height = '0';
  } else if (currentContent == 1) {
    about.style.height = '0';
  } else if (currentContent == 2) {
    work.style.height = '0';
  } else {
    contact.style.height = '0';
  }
}

function displayContent(id) {
  if (id == 0) {
    // home.style.display = 'block';
    home.style.height = 'auto';
  } else if (id == 1) {
    about.style.height = 'auto';
  } else if (id == 2) {
    work.style.height = 'auto';
  } else {
    contact.style.height = 'auto';
  }
}

function showMenu() {
  menuBtn.classList.add('close');
  sideNav.style.width = '20%';
  switch (currentContent) {
    case 0:
      home.style.marginLeft = '20%';
    case 1:
      about.style.marginLeft = '20%';
    case 2:
      work.style.marginLeft = '20%';
    case 3:
      contact.style.marginLeft = '20%';
  }

  // Set Menu State
  menuVisibility = true;
}

function hideMenu() {
  menuBtn.classList.remove('close');
  sideNav.style.width = '0';
  switch (currentContent) {
    case 0:
      home.style.marginLeft = '0';
    case 1:
      about.style.marginLeft = '0';
    case 2:
      work.style.marginLeft = '0';
    case 3:
      contact.style.marginLeft = '0';
  }

  // Set Menu State
  menuVisibility = false;
}
