/**
 * @jest-environment jsdom
 */
import "../../jest_mock/matchMedia.mock.js";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";
import React from "react";

test("header component is render", function () {
  render(<Header></Header>);
  const header = screen.getByTestId("header_main");
  expect(header).not.toBeNull();
});
