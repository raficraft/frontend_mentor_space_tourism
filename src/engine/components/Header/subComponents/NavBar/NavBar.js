import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import { ContainerNavBar } from "./NavBar.css";

export function NavBar({ style, setter = false }) {
  const [data] = useFetch("navBar_data.json", "nav", 0);

  function makeLink() {
    return data.items.map((item, key) => {
      return (
        <NavLink to={item.link} key={key} className="text_nav">
          <span>{item.before}</span>
          {item.text}
        </NavLink>
      );
    });
  }

  return (
    <ContainerNavBar className={style} data-testid="navBar_main">
      {data.loading ? (
        <p className="loading">Loading navigation</p>
      ) : (
        makeLink()
      )}
    </ContainerNavBar>
  );
}
