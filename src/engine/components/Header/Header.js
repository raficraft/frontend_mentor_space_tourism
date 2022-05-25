import React from "react";
import { Logo } from "../../data/svg/logo";
import { WrapperHeader } from "./Header_css";

export default function Header({ children }) {
  return (
    <WrapperHeader data-testid="header_main">
      <Logo data-testid="logo"></Logo>

      <span className="line">
        <span className="line_item"></span>
      </span>
      {children}
    </WrapperHeader>
  );
}
