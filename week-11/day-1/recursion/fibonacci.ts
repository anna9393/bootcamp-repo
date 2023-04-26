//Define a recursive fibonacci(n) method that returns the nth fibonacci number
//with n=0 representing the start of the sequence. 
//The method must be able to handle invalid input (e.g. negative numbers)

function fibonacci(x: number): number {
    if (x <= 0) {
        return 0;
    } else if (x == 1) {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}
console.log(fibonacci(3));