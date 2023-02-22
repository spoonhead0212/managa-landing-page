'use strict'
const mainMenu = document.querySelector('.menu-list');
const hamburgerIcon = document.querySelector('.burger-icon')
hamburgerIcon.addEventListener('click', function() {
    if (hamburgerIcon.src.match('images/icon-hamburger.svg')) {
        hamburgerIcon.src = 'images/icon-close.svg'
    } else {
        hamburgerIcon.src = 'images/icon-hamburger.svg'
    }
    mainMenu.classList.toggle('hidden')
})