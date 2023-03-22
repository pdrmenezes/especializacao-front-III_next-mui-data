import "@testing-library/jest-dom";
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import SelectPage from "./index";

describe("<SelectPage />", () => {
  it("Renders the select component", async () => {
    render(<SelectPage />);

    UserEvent.click(getByRole(screen.getByTestId("country"), "button"));

    await waitFor(() =>
      act(() => {
        UserEvent.click(screen.getByText(/Brasil/i));
      })
    );

    expect(screen.getByRole("heading")).toHaveTextContent(/Brasil/i);
  }),
    it("Adds the selected countries to a list", async () => {
      render(<SelectPage />);
      UserEvent.click(getByRole(screen.getByTestId("country"), "button"));

      await waitFor(() =>
        act(() => {
          UserEvent.click(screen.getByText(/United States/i));
        })
      );

      expect(screen.getByRole("listitem")).toHaveTextContent(/usa/i);
    });
});
