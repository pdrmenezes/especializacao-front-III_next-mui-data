import { act, fireEvent, render, screen } from "@testing-library/react";
import FormComponent from ".";

describe("<FormComponent />", () => {
  const mockSubmit = jest.fn();
  it("does not submit the form with empty fields, not calling the onSubmit function", async () => {
    render(<FormComponent onSubmit={mockSubmit} />);
    const button = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockSubmit).not.toBeCalled();
  }),
    it("calls the onSubmit function with both fields filled correctly", async () => {
      render(<FormComponent onSubmit={mockSubmit} />);

      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      await act(async () => {
        fireEvent.change(emailInput, {
          target: {
            value: "teste@teste.com",
          },
        });
        fireEvent.change(passwordInput, {
          target: {
            value: "1234",
          },
        });
      });

      const button = screen.getByRole("button");
      await act(async () => {
        fireEvent.click(button);
      });

      expect(mockSubmit).toBeCalled();
    }),
    it("checks if email field renders the error message", async () => {
      const { container } = render(<FormComponent onSubmit={mockSubmit} />);

      const emailInput = screen.getByLabelText("Email");
      const button = screen.getByRole("button");

      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch(/Email is required/i);
    }),
    it("checks if email field renders the invalid email message", async () => {
      const { container } = render(<FormComponent onSubmit={mockSubmit} />);

      const emailInput = screen.getByLabelText("Email");
      const button = screen.getByRole("button");

      await act(async () => {
        fireEvent.change(emailInput, {
          target: {
            value: "teste",
          },
        });
      });

      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch(/Input a valid email/i);
    }),
    it("checks if password field renders the error message", async () => {
      const { container } = render(<FormComponent onSubmit={mockSubmit} />);

      const passwordInput = screen.getByLabelText("Password");
      const button = screen.getByRole("button");

      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch(/Password is required/i);
    }),
    it("checks if password field renders the invalid email message", async () => {
      const { container } = render(<FormComponent onSubmit={mockSubmit} />);

      const passwordInput = screen.getByLabelText("Password");
      const button = screen.getByRole("button");

      await act(async () => {
        fireEvent.change(passwordInput, {
          target: {
            value: "123",
          },
        });
      });

      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch(/Password must have at least 4 characters/i);
    });
});
