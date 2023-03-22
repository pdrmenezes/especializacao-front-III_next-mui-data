import { getByRole, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Table from "./index";

describe("<Table/>", () => {
  it("renders the table component", async () => {
    render(<Table products={products} />);

    await waitFor(() => UserEvent.click(screen.getByText(/Calorias/i)));
  }),
    it("renders the empty table message", async () => {
      render(<Table products={[]} />);

      await waitFor(() => UserEvent.click(screen.getByText(/Calorias/i)));
      const infoDataEmpty = screen.getByRole("heading", { level: 2, name: /Nenhum produto a ser exibido./i });
      expect(infoDataEmpty).toBeInTheDocument();
    }),
    it("renders the correct amount of rows", async () => {
      render(<Table products={products} />);

      await waitFor(() => UserEvent.click(screen.getByText(/Calorias/i)));

      const rowProducts = screen.getAllByTestId("table-row");
      expect(rowProducts.length).toBe(5);
    }),
    it("renders the correct element on the right row", async () => {
      render(<Table products={products} />);

      await waitFor(() => UserEvent.click(screen.getByText(/Calorias/i)));

      const nameProducts = screen.getByText(/rice/i);
      expect(nameProducts[1]).toHaveTextContent("pudding");
    });
});
