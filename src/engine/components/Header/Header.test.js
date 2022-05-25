/**
 * @jest-environment jsdom
 */
import "../../jest_mock/matchMedia.mock.js";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";
import React from "react";
import { Logo } from "../../data/svg/logo.js";

test("header component is render", function () {
  render(<Header></Header>);
  const header = screen.getByTestId("header_main");
  expect(header).not.toBeNull();
});

test("if Logo is present", function () {
  render(<Header></Header>);
  const logo = screen.getByTestId("logo");
  expect(logo).not.toBeNull();
});
