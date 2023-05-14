import { render, screen } from "@testing-library/react";
import App from "./App";

it("Renders the navbar and it's elements", () => {
  render(<App />);
  // if there's no navigation role, it will throw an error, that's why I'm using getBy'
  screen.getByRole("navigation");
  //check that the elements exist.
  // TODO: make this less hardcoded bc the naming might change
  screen.getByText(/about/i);
  screen.getByText(/contribute/i);
  screen.getByText(/rules/i);
});

it("Renders the title, and main button", () => {
  render(<App />);
  const title = screen.getByText(/Random Command/i);
  expect(title).toBeInTheDocument();
});
