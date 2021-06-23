'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//Gives an array list of all the  elements, we can use this in loops etc
const modalOpenBtns = document.querySelectorAll('.show-modal');
console.log(modalOpenBtns);

for (let i = 0; i < modalOpenBtns.length; i++) {
  modalOpenBtns[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
