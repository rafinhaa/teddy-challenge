import { render, screen } from "@testing-library/react";
import Input from "../";

describe("Input", () => {
  it("should be to able to render correctly", () => {
    render(<Input placeholder="test" />);

    expect(screen.getByPlaceholderText("test")).toBeTruthy();
  });

  it("should display an error message when error prop is provided", () => {
    render(<Input error="This field is required." />);

    expect(screen.getByText("This field is required.")).toBeTruthy();
  });
});
