import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Main page tests", () => {
  it("renders the title, and main button", () => {
    render(<App />);
    screen.getByText(/Random Command/i);
    screen.getByRole("button");
  });

  //TODO: refactor this into SFC, and migrate the test to individual component unit tests.
  it("generates a new command after clicking the primary button", async () => {
    render(<App />);
    // check if the button exists.
    const generateButton = screen.getByRole("button", { name: /generate/i });
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
});
