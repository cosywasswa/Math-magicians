import operate from '../logic/operate';
import Big from 'big.js';

describe('operate logic ', () => {
    it('should add the two numbers correctly', () => {
        expect(operate(Big(4), Big(7), '+')).toBe('11');
    });

    it('should subtract the two numbers correctly', () => {
        expect(operate(Big(80), Big(10), '-')).toBe('70');
    });

    it('should multiply the two numbers correctly', () => {
        expect(operate(Big(20), Big(5), 'x')).toBe('100');
    });

    it('should devide the two numbers correctly', () => {
        expect(operate(Big(10), Big(2), '÷')).toBe('5');
    });
    it('should throw an error if divided by 0', () => {
        expect(operate(Big(10), Big(0), '÷')).toBe("Can't divide by 0.");
    });
});
