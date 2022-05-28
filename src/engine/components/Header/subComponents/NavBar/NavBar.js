import { NavLink } from "react-router-dom";
import { Container_NavBar } from "./NavBar.css";

export function NavBar({ style, setter = false }) {
  return (
    <Container_NavBar className={style} data-testid="navBar_main">
      <NavLink to="/" className="text_nav" onClick={setter ? setter : null}>
        <span>00</span>Home
      </NavLink>

      <NavLink
        to="/destinations"
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
        <span>03</span>Technology
      </NavLink>
    </Container_NavBar>
  );
}
