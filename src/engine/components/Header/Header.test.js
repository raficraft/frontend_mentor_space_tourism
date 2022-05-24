/**
 * @jest-environment jsdom
 */
import "../../jest_mock/matchMedia.mock";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";
import React from "react";

test("premier test header component", function () {
  render(<Header></Header>);
  const demo = screen.getByTestId("header_main");
  expect(demo).not.toBeNull();
});
