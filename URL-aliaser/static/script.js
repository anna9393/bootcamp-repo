const myForm = document.forms['my-form'];

const myData = new FormData(myForm);

myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const response = await fetch('/api/links', {
        method: 'POST',
        body: JSON.stringify({
            url: myForm.url.value,
            alias: myForm.alias.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    console.log(data)

    if (data.status === 400) {
        const messageErr = document.querySelector('.error')
        messageErr.textContent = data.error

    } else if (data.status === 200) {
        const messageCorrect = document.querySelector('.msg')
        messageCorrect.innerHTML = `Yourl url is aliased to <b>${data.alais}</b> and your secret code is <b>${data.secretCode}</b>`
        myForm.reset();
    }
});