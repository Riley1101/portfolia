import { NewsLetter } from "@/components/common/newsletter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../../utils/newsletter", () => ({
  SubmitNewsLetter: "/add_user?name=riley&email=arkar@gmail.com",
}));

describe("Newsletter UI", () => {
  test.skip("renders Newsletter component", () => {
    render(<NewsLetter />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your name!/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your email!/i)
    ).toBeInTheDocument();
  });

  test.skip("expect form to have correct action", () => {
    render(<NewsLetter />);
    expect(screen.getByRole("form")).toHaveAttribute("action");
    expect(screen.getByRole("form")).toHaveAttribute(
      "action",
      "/add_user?name=riley&email=arkar@gmail.com"
    );
  });
});

