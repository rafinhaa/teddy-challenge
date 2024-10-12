import { render, screen } from "@testing-library/react";
import Pagination from "../";

describe("Pagination", () => {
  it("should be to able to render correctly", () => {
    render(
      <Pagination totalPages={10} currentPage={4} onPageChange={() => {}} />
    );

    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getAllByText("...").length).toBe(2);

    expect(screen.getByText("3")).toBeTruthy();
    expect(screen.getByText("4")).toBeTruthy();
    expect(screen.getByText("5")).toBeTruthy();

    expect(screen.getByText("10")).toBeTruthy();
  });

  it("should be to able to click the button", () => {
    const onPageChange = vitest.fn();
    render(
      <Pagination totalPages={10} currentPage={4} onPageChange={onPageChange} />
    );

    const button = screen.getByText("5");
    button.click();

    expect(onPageChange).toBeCalledTimes(1);
  });
});
