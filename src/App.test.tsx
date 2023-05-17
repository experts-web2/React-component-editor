import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  
  // Assert that the headings are rendered correctly
  expect(screen.getByText("React Component To JSON")).toBeInTheDocument();
  expect(screen.getByText("JSON To React Component")).toBeInTheDocument();
  
  // You can write additional assertions based on your specific requirements
});



