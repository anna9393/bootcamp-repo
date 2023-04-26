import { addNum, divide, isPrime } from './math'

//test addNum function
test('adds 1 + 2 to equal 3', () => {
    expect(addNum(1, 2)).toBe(3);
});

//test divide function
test('divide 10 by 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

//Test if the divide method throws an exception if b is 0
test('should throw an error if b===0', () => {
    expect(() => {
        divide(10, 0);
    }).toThrow('Unable to divide by 0');
})

//test isPrime function
test('check that 3 isPrime', () => {
    expect(isPrime(3)).toBe(true);
});

test('check that 10 is not Prime', () => {
    expect(isPrime(10)).not.toBe(true);
});