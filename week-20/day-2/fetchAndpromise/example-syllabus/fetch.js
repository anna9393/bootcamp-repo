
import fetch from 'node-fetch';
const URL = 'https://api.chucknorris.io/jokes/random';

fetch(URL)
    .then(response => response.json())
    .then(myJson => console.log(myJson));