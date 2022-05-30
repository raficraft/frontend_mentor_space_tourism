import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../data/svg/logo";
import { WrapperHeader } from "./Header_css";

export default function Header({ children }) {
  return (
    <WrapperHeader>
      <div className="logo">
        <NavLink to="/">
          <Logo className="logo_scaling"></Logo>
        </NavLink>
      </div>

      <span className="line" data-testid="line">
        <span className="line_item"></span>
      </span>
      {children}
    </WrapperHeader>
  );
}
