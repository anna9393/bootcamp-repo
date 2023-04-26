/*
At the beginning, add (append) ten stars to random coordinates via JavaScript. You'll have to create an element with class 'star' and set it an inline style. The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.
On click anywhere on section.world, add a star beneath the cursor.
On random interval, a star should fall. That means you should pick a random star on random interval and give it fallen class, until all stars are fallen.
Make trees grow on click!
💪 Add a rule that a new star cannot be added within 50px radius of any other.
💪 Move moon around by dragging it with mouse.
*/
const stars = document.querySelector('div.star');
const section = document.querySelector('section.world');
const moon = document.querySelector('div.moon');
const horizon = document.querySelector('div.horizon');


for (let i = 0; i < 10; i++) {
    const newStar = document.createElement('div');
    newStar.className += 'star';
    newStar.setAttribute('style', `left:${(Math.random() * (-20)).toString()}vw;top:${(Math.random() * (-40)).toString()}vh;`);
    stars.appendChild(newStar);
}

section.onclick = function (event) {
    const x = event.clientX;
    const y = event.clientY;

    const onClickStar = document.createElement('div');
    onClickStar.className += 'star';

    onClickStar.setAttribute('style', `left:${x}px;top:${y}px;`);
    section.appendChild(onClickStar);
}

const allStars = document.getElementsByClassName('star');

//let randomStar = allStars[Math.floor(Math.random() * allStars.length)]
for (let i = 0; i < allStars.length; i++) {
    //let randomStar = allStars[Math.floor(Math.random() * allStars.length)]

    setTimeout(() => {
        let randomStar = allStars[Math.floor(Math.random() * allStars.length)]
        randomStar.className += 'fallen';
    }, 1000 * i);

}



