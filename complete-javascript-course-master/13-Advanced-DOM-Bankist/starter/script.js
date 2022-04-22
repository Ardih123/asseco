'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'we use cookies for improved functionality and analytics!';
message.innerHTML =
  'we use cookies for improved functionality and analytics! <button class="btn btn--close-cookie">got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });

//syles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); //doesnt work because not inline
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height); //gets any style on page

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'beautiful minimalist logo';
console.log(logo.alt);

//non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');
console.log(logo.getAttribute('company'));

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('a');
logo.classList.remove('a');
logo.classList.toggle('b');
logo.classList.contains('f');

//dont use it will overwrite all classes
//logo.className = "jonas"

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//events
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: great you are reading the heading');
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: great you are reading the heading');
// };

//event propagation
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //console.log('LINK');
  this.style.backgroundColor = randomColor();
  //console.log('LINK', e.target);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //console.log('LINK');
  this.style.backgroundColor = randomColor();
  //console.log('CONTAINER', e.target);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  //console.log('LINK');
  this.style.backgroundColor = randomColor();
  //console.log('NAV', e.target);
});
