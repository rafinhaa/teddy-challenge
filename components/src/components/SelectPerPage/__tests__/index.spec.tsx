import { fireEvent, render, screen } from "@testing-library/react";
import SelectPerPage from "../";

describe("SelectPerPage", () => {
  it("should be to able to render correctly", () => {
    render(
      <SelectPerPage
        clientsPerPage={10}
        handleClientsPerPageChange={() => {}}
      />
    );

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    expect(screen.getByText("5")).toBeTruthy();
    expect(screen.getByText("10")).toBeTruthy();
    expect(screen.getByText("15")).toBeTruthy();
  });

  it("should be to able to click the button", () => {
    const handleClientsPerPageChange = vitest.fn();
    render(
      <SelectPerPage
        clientsPerPage={10}
        handleClientsPerPageChange={handleClientsPerPageChange}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "15" } });

    expect(handleClientsPerPageChange).toHaveBeenCalledTimes(1);
    expect(handleClientsPerPageChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "15" }),
      })
    );
  });
});
