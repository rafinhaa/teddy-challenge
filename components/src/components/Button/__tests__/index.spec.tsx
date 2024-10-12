import { render, screen } from "@testing-library/react";
import Button from "../";

describe("Button", () => {
  it("should be to able to render correctly", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("should be to able to click the button", () => {
    const onClick = vitest.fn();
    render(<Button onClick={onClick}>Click</Button>);

    const button = screen.getByRole("button");

    button.click();
    expect(onClick).toBeCalledTimes(1);
  });
});
