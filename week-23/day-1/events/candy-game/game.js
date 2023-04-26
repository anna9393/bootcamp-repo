const candies = document.querySelector('.candies');
const btnCreate = document.querySelector('.create-candies');

let counter = 0;

btnCreate.addEventListener('click', () => {
    counter++;
    candies.textContent = counter;
});