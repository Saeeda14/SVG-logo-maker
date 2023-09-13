const { Circle, Triangle, Square } = require('./shapes')
const Shape = require('./Shape');

// test the circle class 
test('Circle renders correctly', () => {
    const circle = new Circle('red'); 
    const expected = '<circle fill="red" />';
    expect(circle.render()).toBe(expected);
});
test('Triangle renders correctly', () => {
    const triangle = new Triangle('blue'); 
    const expected = '<triangle fill="blue" />';
    expect(triangle.render()).toBe(expected);
});
test('Square renders correctly', () => {
    const square = new Square('green'); 
    const expected = '<square fill="green" />';
    expect(square.render()).toBe(expected);
});

