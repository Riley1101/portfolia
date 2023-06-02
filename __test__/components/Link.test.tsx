import Link from "@/components/common/link";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { navs, social } from "@/components/common/nav-aside";

function TestComponent() {
  return (
    <div>
      {navs.map((nav) => (
        <Link href={nav.href} key={nav.id} icon={nav.icon}>
          {nav.name}
        </Link>
      ))}
      {social.map((nav) => (
        <Link href={nav.href} key={nav.id} icon={nav.icon}>
          {nav.name}
        </Link>
      ))}
    </div>
  );
}
const active_class =
  "bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary text-theme-accent";
const active_route = "home";

jest.mock("next/navigation", () => ({
  useSelectedLayoutSegment() {
    return active_route;
  },
  useSelectedLayoutSegments() {
    return [active_route];
  },
}));

describe("Link", () => {
  test("renders Link component", () => {
    const icon = <div id="icon">icon</div>;
    render(
      <Link href="/" icon={icon}>
        Home
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
  });

  test("renders Link component with navs", () => {
    render(<TestComponent />);
    navs.forEach((nav) => {
      expect(screen.getByText(nav.name)).toBeInTheDocument();
      expect(screen.getByText(nav.name).parentElement).toContainHTML("svg");
    });
    social.forEach((nav) => {
      expect(screen.getByText(nav.name)).toBeInTheDocument();
      expect(screen.getByText(nav.name).parentElement).toContainHTML("svg");
    });
  });
  test("expect active classnames to be present", () => {
    render(<TestComponent />);
    navs.forEach((nav) => {
      if (nav.name === active_route) {
        expect(screen.getByText(nav.name).parentElement).toHaveClass(
          active_class
        );
      }
    });
  });
});
