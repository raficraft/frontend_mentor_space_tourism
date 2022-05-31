/**
 * @jest-environment jsdom
 */

import { render, waitFor } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

test("Explore button component and child  is render", () => {
  const { container, getByText } = render(
    <MemoryRouter>
      <NavBar></NavBar>
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
  expect(getByText(/home/i)).toBeInTheDocument();
});
