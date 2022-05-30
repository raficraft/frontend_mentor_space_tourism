import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../data/svg/logo";
import { WrapperHeader } from "./Header_css";

export default function Header({ children }) {
  return (
    <WrapperHeader data-testid="header_main">
      <div className="logo">
        <NavLink to="/">
          <Logo data-testid="logo" className="logo_scaling"></Logo>
        </NavLink>
      </div>

      <span className="line">
        <span className="line_item"></span>
      </span>
      {children}
    </WrapperHeader>
  );
}
