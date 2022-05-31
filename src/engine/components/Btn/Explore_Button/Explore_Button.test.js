/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Explore_Button from "./Explore_Button";

test("Explore button component and child  is render", () => {
  const { container, getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Explore_Button></Explore_Button>
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
  expect(getByText(/explore/i)).toBeInTheDocument();
});
