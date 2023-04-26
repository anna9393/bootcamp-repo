'use strict'

const paragraphs = document.querySelectorAll('p');

if (paragraphs[3].classList.contains('dolphin')) {
    paragraphs[0].textContent = 'pear';
}

if (paragraphs[0].classList.contains('apple')) {
    paragraphs[2].textContent = 'dog';
}

const apple = document.querySelector('.apple');
apple.classList.add('red');

const balloon = document.querySelector('.balloon');
balloon.setAttribute('style', 'border-radius: 0%')