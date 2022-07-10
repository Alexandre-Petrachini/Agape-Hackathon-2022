import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./index";

test("Renders Login page", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );

  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Senha");
});
