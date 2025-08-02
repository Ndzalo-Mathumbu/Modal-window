'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
console.log(btnsShowModel);

for (let i = 0; i < btnsShowModel.length; i++) {
  const openModal = function () {
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
  };
  btnsShowModel[i].addEventListener('click', openModal);
  overlay.addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hide');
  overlay.classList.add('hide');
};
modal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hide')) {
    closeModal();
  }
});
