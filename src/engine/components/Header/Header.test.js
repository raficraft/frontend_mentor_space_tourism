/**
 * @jest-environment jsdom
 */

import { render, prettyDOM, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";
import React from "react";
import { NavBar } from "./subComponents/NavBar/NavBar.js";
import { MemoryRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

test("header component and child  is render", async () => {
  const { container, getByText, getByTitle } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Header>
        <NavBar></NavBar>
      </Header>
    </MemoryRouter>
  );

  expect(container).toBeInTheDocument();
  expect(getByTitle(/space/i)).toBeInTheDocument();
  expect(screen.getByTestId("line")).toBeInTheDocument();
  expect(getByText(/home/i)).toBeInTheDocument();
});
