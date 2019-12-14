var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
/* Поправить: */
/* https://github.com/htmlacademy-adaptive/1001575-cat-energy-18/pull/9#pullrequestreview-327364028 */
