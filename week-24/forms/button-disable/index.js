const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const viktor = document.querySelector('#goldfish');
const catBtn = document.getElementById('cats');
const signBtn = document.getElementById('sign-up');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const favPet = document.querySelectorAll('input[name="fav-pet"]');
const options = document.querySelectorAll('input[name="option"]');

favPet.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (dog.checked || cat.checked) {
            signBtn.disabled = false;
        } else {
            signBtn.disabled = true;
        }
    });
});

options.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (yes.checked) {
            catBtn.disabled = false;
            catBtn.addEventListener('click', () => {
                alert('Thank you, you\'ve successfully signed up for cat facts');
            });
            signBtn.disabled = true;
        } else if (viktor.checked && no.checked) {
            signBtn.disabled = false;
            catBtn.disabled = true;
            signBtn.addEventListener('click', () => {
                alert('Sigh, we still added you to the cat facts list');
            });
        } else {
            signBtn.disabled = true;
            catBtn.disabled = true;
        }
    });
});
