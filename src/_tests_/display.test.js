import { render, screen } from '@testing-library/react';
import Display from '../components/display';

describe('Display component', () => {
  it('should contain the props', () => {
    const props = {
      total: 0,
      operation: null,
      next: null,
    };
    const { queryByTestId } = render(<Display props={props} />);
    const input = queryByTestId('display-div');
    expect(input).toBeTruthy();
  });
  it('should render a 0 on display for total prop', () => {
    const props = {
      total: 0,
      operation: null,
      next: null,
    };
    render(<Display props={props} />);
    const input = screen.getByText(0);
    expect(input).toBeInTheDocument;
  });

  it('should contain operation props in the document', () => {
    const props = {
      total: 0,
      operation: null,
      next: null,
    };
    const { queryByTestId } = render(<Display props={props} />);
    const input = queryByTestId('operation');
    expect(input).toBeInTheDocument;
  });
});
