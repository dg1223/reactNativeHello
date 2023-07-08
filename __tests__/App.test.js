import React from "react";
import { render } from "@testing-library/react-native";
// import renderer from "react-test-renderer";
// import App from "./App";

/* By using const App = require("../App").default;, 
you access the default export of the App module and assign 
it to the App constant for rendering in your tests.
Because the render function from @testing-library/react-native 
expects a React component, not an object. */
const App = require("../App").default;

describe("test App", () => {
  it("renders 'Hello World' text to be defined", () => {
    const { getByText } = render(<App />);
    const helloText = getByText("Hello World");
    expect(helloText).toBeDefined();
  });

  it("renders 'Hello World' text to be truthy", () => {
    const { getByText } = render(<App />);
    const helloText = getByText("Hello World");
    expect(helloText).toBeTruthy();
  });

  it("has a container with white background color", () => {
    const { getByTestId } = render(<App />);
    const container = getByTestId("container");
    expect(container.props.style.backgroundColor).toBe("#fff");
  });
});
