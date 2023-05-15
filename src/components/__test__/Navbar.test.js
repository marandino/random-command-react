import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

it("renders the navbar and it's elements", () => {
  render(<Navbar />);
  // if there's no navigation role, it will throw an error, that's why I'm using getBy'
  screen.getByRole("navigation");
  // TODO: make this less hardcoded bc the naming might change
  screen.getByText(/about/i);
  screen.getByText(/contribute/i);
  screen.getByText(/rules/i);
});
