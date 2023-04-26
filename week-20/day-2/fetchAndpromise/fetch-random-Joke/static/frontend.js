const button = document.querySelector('button');
const htmlJoke = document.querySelector('.joke');

document.addEventListener('DOMContentLoaded', button.onclick = () => {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(object => htmlJoke.textContent = object.joke)
        .catch((error) => {
            console.log('There has been a problem with your fetch operation:', error);
        })
});
