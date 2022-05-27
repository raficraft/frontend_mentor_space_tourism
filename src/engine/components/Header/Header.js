import React from "react";
import { Logo } from "../../data/svg/logo";
import { WrapperHeader } from "./Header_css";

export default function Header({ children }) {
  return (
    <WrapperHeader data-testid="header_main">
      <div className="logo">
        <Logo data-testid="logo" className="logo_scaling"></Logo>
      </div>

      <span className="line">
        <span className="line_item"></span>
      </span>
      {children}
    </WrapperHeader>
  );
}
