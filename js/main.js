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

// media size
var mediaMd = window.matchMedia('(min-width: 541px) and (max-width: 900px)');
var mediaSm = window.matchMedia('(max-width: 540px)');

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
  var w;
  if (mediaSm.matches) {
    w = '100%';
  } else if (mediaMd.matches) {
    w = '30%';
  } else {
    // media large and extra large
    w = '20%';
  }

  sideNav.style.width = w;
  switch (currentContent) {
    case 0:
      home.style.marginLeft = w;
    case 1:
      about.style.marginLeft = w;
    case 2:
      work.style.marginLeft = w;
    case 3:
      contact.style.marginLeft = w;
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

var modal = document.getElementsByClassName('project-modal');
var projectItem = document.getElementsByClassName('project-item');
var span = document.getElementsByClassName('modal-close');

projectItem[0].onclick = function() {
  modal[0].style.display = 'grid';
};
span[0].onclick = function() {
  modal[0].style.display = 'none';
};

projectItem[1].onclick = function() {
  modal[1].style.display = 'grid';
};
span[1].onclick = function() {
  modal[1].style.display = 'none';
};

projectItem[2].onclick = function() {
  modal[2].style.display = 'grid';
};
span[2].onclick = function() {
  modal[2].style.display = 'none';
};

projectItem[3].onclick = function() {
  modal[3].style.display = 'grid';
};
span[3].onclick = function() {
  modal[3].style.display = 'none';
};
