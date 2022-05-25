import React from "react";
import useMediaQuery from "../../hooks/useMediaQueries";
import Header from "../Header/Header";
import { BurgerMenu } from "../Header/subComponents/BurgerMenu/BurgerMenu";
import { NavBar } from "../Header/subComponents/NavBar/NavBar";
import { Wrapper } from "./Layout_css";

export default function Layout({ children }) {
  const isMobil = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px)");

  return (
    <Wrapper>
      <Header>
        {isTablet && <NavBar style="nav_desktop"></NavBar>}
        {isMobil && <BurgerMenu></BurgerMenu>}
      </Header>
      <main> {children}</main>
    </Wrapper>
  );
}
