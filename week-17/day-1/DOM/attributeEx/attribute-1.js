'use strict'

const img = document.querySelector('img');
console.log(img.getAttribute('src'));
img.setAttribute('src', 'https://icon2.cleanpng.com/20180329/ibq/kisspng-shiba-inu-world-of-warcraft-doge-snake-dogecoin-deal-with-it-5abce40bda25d6.2968032215223285878935.jpg')

const aTag = document.querySelector('a');
aTag.setAttribute('href', 'https://www.greenfoxacademy.cz');

const secondButton = document.querySelector('.this-one');
secondButton.textContent = "Don't click me!";