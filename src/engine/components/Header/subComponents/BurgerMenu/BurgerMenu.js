import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { BurgerContainer, BurgerIcon } from "./Burger_menu_css";

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
