/*You can work in the html or in a separate js file. Like:
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.
*/

const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.getElementsByClassName('asteroid big');
for (let i = 0; i < businessLamp.length; i++) {
    console.log(businessLamp[i]);
}

const conceitedKing = document.querySelectorAll('.container div');
for (let i = 0; i < conceitedKing.length; i++) {
    alert(conceitedKing[i].textContent);
}

let noBusiness = document.getElementsByTagName('div');
for (let i = 0; i < noBusiness.length; i++) {
    console.log(noBusiness[i]);
}