import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("renders the navbar and it's elements", () => {
  render(<App />);
  // if there's no navigation role, it will throw an error, that's why I'm using getBy'
  screen.getByRole("navigation");
  //check that the elements exist.
  // TODO: make this less hardcoded bc the naming might change
  screen.getByText(/about/i);
  screen.getByText(/contribute/i);
  screen.getByText(/rules/i);
});

it("renders the title, and main button", () => {
  render(<App />);
  screen.getByText(/Random Command/i);
  screen.getByRole("button");
});

//TODO: refactor this into SFC, and migrate the test to individual component unit tests.
test("clicking the button generates a new command", async () => {
  render(<App />);
  // check if the button exists.
  const generateButton = screen.getByRole("button"); //TODO: make this more specific, by targeting the main button. Right now, there's only one button on screen so it doesn´t fail.
  // get the subheader, the element with the "command"
  const subHeaderElement = screen.getByTestId("randomCommand");
  // store the value before the click
  const subHeaderBeforeClick = subHeaderElement.textContent;
  //click
  await fireEvent.click(generateButton);
  //store the value after the click
  const subHeaderAfterClick = subHeaderElement.textContent;
  //assert
  expect(subHeaderBeforeClick).not.toMatch(subHeaderAfterClick);
});
