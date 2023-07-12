import calculate from '../logic/calculate';

let testObj;
beforeEach(() => {
  testObj = { total: null, next: null, operation: null };
});

describe('Calculate logic', () => {
  test('AC button type Should return object with null values', () => {
    expect(calculate(testObj, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('Should add values', () => {
    testObj = calculate(testObj, '4');
    testObj = calculate(testObj, '+');
    testObj = calculate(testObj, '7');
    testObj = calculate(testObj, '=');
    expect(testObj.total).toBe('11');
  });
  test('Dividing by zero', () => {
    testObj = calculate(testObj, '5');
    testObj = calculate(testObj, '÷');
    testObj = calculate(testObj, '0');
    testObj = calculate(testObj, '=');
    expect(testObj.total).toBe("Can't divide by 0.");
  });
});
