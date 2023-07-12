import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Calculator component', () => {
    const props = {
        total: 0,
        operation: null,
        next: null,
    };
    it('should render calculator elements ', () => {
        const { getByTestId } = render(<Calculator />);
        const output = getByTestId('calcDiv');
        expect(output).toBeTruthy();
    });

    it('should render next prop elements as null', () => {
        render(<Calculator props={props} />);
        const input = screen.getByTestId('row');
        expect(input).toBeInTheDocument;
        expect(props.next).toBe(null);
    });

    it('should render correctly', () => {
        const tree = renderer.create(<Calculator />).toJSON;
        expect(tree).toMatchSnapshot();
    });
});
