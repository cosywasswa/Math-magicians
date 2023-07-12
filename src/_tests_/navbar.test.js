import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/navbar';

describe('Nav bar component', () => {
    it('should render the navbar', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>,
        );
        const bar = getByTestId('navi');
        expect(bar).toBeInTheDocument;
    });

    it('should render the custom link with correct element', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>,
        );
        const link = screen.getByTestId('border');
        expect(link).toBeCalled;
    });

    it('should render correctly', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
