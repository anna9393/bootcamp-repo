import { Apple } from "./apples";

test('method getApple() should return string: "apple" ', () => {
    const myObject = new Apple();
    expect('apple').toEqual(myObject.getApple());
});