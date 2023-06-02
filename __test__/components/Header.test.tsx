import Header from "@/components/common/header";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { navs, social } from "@/components/common/nav-aside";

const mockSignOut = jest.fn();
jest.mock("next/navigation", () => ({
  useSelectedLayoutSegment() {
    return {
      push: mockSignOut,
    };
  },
  useSelectedLayoutSegments() {
    return {
      push: mockSignOut,
    };
  },
}));

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByText(/ArkarDev/i);
    expect(logo).toBeVisible();
  });
  it("render the modal button", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    expect(button).toBeVisible();
  });
  it("render modal on click at the btn", () => {
    render(<Header />);
    const open = screen.getByLabelText(/Open Navigation Modal/i);
    fireEvent.click(open);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeVisible();
  });

  it("toggling the modal should work fine", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeVisible();
    const close = screen.getByLabelText(/Close Navigation Modal/i);
    fireEvent.click(close);
    expect(modal).not.toBeVisible();
  });

  it("Clicking outside the modal should close it", () => {
    render(<Header />);
    const button = screen.getByLabelText(/Open Navigation Modal/i);
    fireEvent.click(button);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeVisible();
    fireEvent.click(modal);
    expect(modal).not.toBeVisible();
  });

  it("model should have navs", () => {
    render(<Header />);
    const button = screen.getByLabelText(/Open Navigation Modal/i);
    fireEvent.click(button);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeVisible();
    navs.forEach((nav) => {
      const link = screen.getByText(nav.name);
      expect(link).toBeVisible();
    });
  });

  it("model should have social links", () => {
    render(<Header />);
    const button = screen.getByLabelText(/Open Navigation Modal/i);
    fireEvent.click(button);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeVisible();
    social.forEach((soc) => {
      const link = screen.getByText(soc.name);
      expect(link).toBeVisible();
    });
  });
});
