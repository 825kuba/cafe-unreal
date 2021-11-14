'use strict';

/////////////////////////
// NAVIGATION
/////////////////////////
const navItems = document.querySelector('.nav-items');
const hamburger = document.querySelector('.ham');
const navOverlay = document.querySelector('.nav-overlay');

//menu and hamburger animation
const openCloseMenu = function () {
  navItems.classList.toggle('active');
  hamburger.classList.toggle('active');
  navOverlay.classList.toggle('hidden');
};
//hamburger button
hamburger.addEventListener('click', openCloseMenu);
//overlay
navOverlay.addEventListener('click', openCloseMenu);

// menu links
navItems.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    openCloseMenu();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// scroll events for logos
const navLogos = document.querySelectorAll('.nav-logo');

const logoScroll = function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.nav-logo');
  if (!clicked) return;
  const id = clicked.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};
navLogos.forEach(logo => logo.addEventListener('click', logoScroll));

/////////////////////////
// REVEAL SECTION HEADINGS
/////////////////////////

const sectionHeadings = document.querySelectorAll('.banner-heading');

const revealHeadings = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('hidden');
  observer.unobserve(entry.target);
};

const headingsObserver = new IntersectionObserver(revealHeadings, {
  root: null,
  threshold: 0,
});

sectionHeadings.forEach((h, i) => {
  // if (i > 0) {
  headingsObserver.observe(h);
  h.classList.add('hidden');
  // }
});

/////////////////////////
// GALLERY - SLIDER
/////////////////////////

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.left');
  const btnRight = document.querySelector('.right');

  let curIndex = 0;
  let maxIndex = slides.length - 1;

  //create dots
  const dotsContainer = document.querySelector('.dotsContainer');
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `
  <button class="dot" data-index="${i}"></button>
  `
    );
  });

  //set active dot
  const activeDot = function (index) {
    //remove active class from all dots
    document
      .querySelectorAll('.dot')
      .forEach(dot => dot.classList.remove('active'));

    //set active class on dot with number of current index
    document
      .querySelector(`.dot[data-index="${index}"]`)
      .classList.add('active');
  };

  // sliding function
  const moveSlides = function (index) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    activeDot(index);
  };
  moveSlides(curIndex);

  //EXTRA - scroll excatly on images (when clicking buttons)
  const scrollToSlider = () =>
    document.querySelector('.gallery').scrollIntoView();

  // slide left
  const slideLeft = function () {
    scrollToSlider();
    curIndex === 0 ? (curIndex = maxIndex) : curIndex--;
    moveSlides(curIndex);
  };
  //button click
  btnLeft.addEventListener('click', slideLeft);
  // arrow press
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && slideLeft();
  });

  //slide right
  const slideRight = function () {
    scrollToSlider();
    curIndex === maxIndex ? (curIndex = 0) : curIndex++;
    moveSlides(curIndex);
  };
  //button click
  btnRight.addEventListener('click', slideRight);
  // arrow press
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && slideRight();
  });

  //slide on clicking dots
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      curIndex = Number(e.target.dataset.index);
      moveSlides(curIndex);
      scrollToSlider();
    }
  });
};
slider();

/////////////////////////
// CATERING - MODAL
/////////////////////////

const modalBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal');

//show modal
const showModal = function (e) {
  e.preventDefault();
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
modalBtn.addEventListener('click', showModal);

//hide modal
const hideModal = function () {
  modalOverlay.classList.add('hidden');
  modal.classList.add('hidden');
};

modalOverlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
  }
});

closeModalBtn.addEventListener('click', hideModal);

/////////////////////////
// CATERING - MODAL - FORM
/////////////////////////

const btnReset = document.querySelector('.form-reset');
const formInput = document.querySelectorAll('.modal-form input');
const formTextarea = document.querySelector('.modal-form textarea');

const resetForm = function () {
  formInput.forEach(i => (i.value = ''));
  formTextarea.value = '';
  formInput[0].focus();
};

btnReset.addEventListener('click', function (e) {
  e.preventDefault();
  window.confirm(
    'Are you sure you want to reset the form? This will delete all your input from all the fields.'
  ) && resetForm();
});
