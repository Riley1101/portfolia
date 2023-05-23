import useSearchByTitle from "@/utils/search-by-title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import { faker } from "@faker-js/faker";

const data = Array.from({ length: 5 }, (_) => ({
  id: faker.string.uuid(),
  title: faker.animal.dog(),
  description: faker.lorem.lines({ min: 1, max: 2 }),
}));

function TestComponent() {
  const { searchTerm, handleChange } = useSearchByTitle(data);
  return (
    <>
      <input
        role="textbox"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {data.map((item) => (
          <li key={item.id} data-testid={item.id}>
            <span>{item.title}</span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

describe("Search-by-title", () => {
  test("Render Elements Correctly", () => {
    render(<TestComponent />);
    data.forEach((item) => {
      let list = screen.getByTestId(item.id);
      expect(list.children[0].innerHTML).toBe(item.title);
      expect(list.children[1].innerHTML).toBe(item.description);
    });
  });

  test("Search By Title", () => {
    render(<TestComponent />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    data.forEach((item) => {
      const searchTerm = item.title;
      input.value = searchTerm;
      input.dispatchEvent(new Event("change"));
      let list = screen.getByTestId(item.id);
      if (item.title.includes(searchTerm)) {
        expect(list).toBeVisible();
      }
    });
  });

  test("Capital casing doesn't matter", () => {
    render(<TestComponent />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    let searchTerm = data[0].title;
    input.value = searchTerm.toUpperCase();
    input.dispatchEvent(new Event("change"));
    let list = screen.getByTestId(data[0].id);
    expect(list).toBeVisible();
  });

  test("Small casing doesn't matter", () => {
    render(<TestComponent />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    let searchTerm = data[0].title;
    input.value = searchTerm.toLowerCase();
    input.dispatchEvent(new Event("change"));
    let list = screen.getByTestId(data[0].id);
    expect(list).toBeVisible();
  });
});
