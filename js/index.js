'use strict'

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if(burger) {
  burger.addEventListener('click', openMenu);
};

if(menu) {
  menu.addEventListener('click', openMenu);
};

function openMenu(){
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}

