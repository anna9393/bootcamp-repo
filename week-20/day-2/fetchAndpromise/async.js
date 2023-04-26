import fetch from 'node-fetch';
import { XMLHttprequest } from 'xmlhttprequest';
import fs from 'fs';

const getSomething = (url, callback) => {
    const xhttp = new XMLHttprequest();

    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let result = xhttp.responseText;
            callback(undefined, result);
        } else if (xhttp.readyState === 4) {
            callback('notfound', undefined);
        }
    })
    xhttp.open('GET', url);
    xhttp.send();
}

getSomething('http://x.com/', (err, data) => {
    console.log(err);
    console.log(data);
})

function get(url) {
    return new Promise(function (resolve, reject) {
        const xhttp = new XMLHttprequest();
        xhttp.open('GET', url);

        xhttp.onload = function () {
            if (xhttp.status >= 200 && xhttp.status < 300) {
                console.log('successfull');
                let result = xhttp.responseText;
                resolve(result);
            } else {
                reject(xhttp.responseText);
            }
        }

        xhttp.onerror = function () {
            reject(xhttp.status);
        }
        xhttp.send();
    })
}

const promise = get('http://x.com/');
promise.then((response) => {
    console.log(response);
    return get('http://x.com/');
});