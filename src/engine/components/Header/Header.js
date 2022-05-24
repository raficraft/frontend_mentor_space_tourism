import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQueries";
import { BurgerContainer, BurgerIcon, WrapperHeader } from "./Header_css";

export default function Header({ children }) {
  const isMobil = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px)");

  return (
    <WrapperHeader data-testid="header_main">
      <Logo></Logo>
      <span className="line">
        <span className="line_item"></span>
      </span>
      {isTablet && <NavBar style={"nav_desktop"} />}
      {isMobil && <BurgerMenu />}
      {children}
    </WrapperHeader>
  );
}

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BurgerIcon
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        data-isopen={isOpen}
      >
        <span className="burger_item burger_item--top"></span>
        <span className="burger_item burger_item--middle"></span>
        <span className="burger_item burger_item--bottom"></span>
      </BurgerIcon>

      <BurgerContainer className="burgerMenu" data-isopen={isOpen}>
        <div>
          <NavBar
            style={"nav_mobil"}
            setter={() => {
              setIsOpen(!isOpen);
            }}
          ></NavBar>
        </div>
      </BurgerContainer>
    </>
  );
}

export function NavBar({ style, setter = false }) {
  return (
    <nav className={style}>
      <NavLink to="/" className="text_nav" onClick={setter ? setter : null}>
        <span>00</span>Home
      </NavLink>

      <NavLink
        to="/destination"
        className="text_nav"
        onClick={setter ? setter : null}
      >
        <span>01</span>Destination
      </NavLink>

      <NavLink to="/crew" className="text_nav" onClick={setter ? setter : null}>
        <span>02</span>Crew
      </NavLink>

      <NavLink
        to="/technology"
        className="text_nav"
        onClick={setter ? setter : null}
      >
        <span>02</span>Technology
      </NavLink>
    </nav>
  );
}

export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <g fill="none" fillRule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
  );
}
