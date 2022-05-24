import React from "react";
import { NavLink } from "react-router-dom";
import { WrapperHeader } from "./Header_css";

export default function Header() {
  function navBar() {
    return (
      <nav>
        <NavLink to="/" className="text_nav">
          <span>00</span>Home
        </NavLink>

        <NavLink to="/destination" className="text_nav">
          <span>01</span>Destination
        </NavLink>

        <NavLink to="/crew" className="text_nav">
          <span>02</span>Crew
        </NavLink>

        <NavLink to="/technology" className="text_nav">
          <span>02</span>Technology
        </NavLink>
      </nav>
    );
  }
  return (
    <WrapperHeader>
      <Logo></Logo>
      <span className="line">
        <span class="line_item"></span>
      </span>
      {navBar()}
    </WrapperHeader>
  );
}

export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
  );
}
