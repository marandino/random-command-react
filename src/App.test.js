import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the navbar and elements are clickable", () => {
  render(<App />);
  const aboutSection = screen.getByText(/About/i);
  expect(aboutSection).toBeInTheDocument();
  const rulesSection = screen.getByText(/Rules/i);
  expect(rulesSection).toBeInTheDocument();
});

it("Renders the title, and main button", () => {
  render(<App />);
  const title = screen.getByText(/Random Command/i);
  expect(title).toBeInTheDocument();
});
