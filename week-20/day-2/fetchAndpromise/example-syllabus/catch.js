const erroredFunction = () => {
    return new Promise(() => {
        throw new Error('Uh-oh!');
    });
};

const promise = erroredFunction();
promise.catch(error => {
    console.log(error.message);
});