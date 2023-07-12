import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Quotes from "../components/quotes";

describe("Should render Quotes component", () => {
  test("Should render loading status for quote", () => {
    render(<Quotes />);
    const element = screen.getByTestId("quoteStatus");
    expect(element).toBeTruthy();
  });
  test("Should render according to snapshot", () => {
    const tree = renderer.create(<Quotes />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
