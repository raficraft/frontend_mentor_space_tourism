import React from "react";
import { NavLink } from "react-router-dom";
import { Big_button } from "./Explore_Button.css";

export default function Explore_Button() {
  return (
    <Big_button className="home_content home_content--right">
      <div className="button_big">
        <NavLink to="/destination" className="button_big--link">
          <span className="button_big--text">Explore</span>
        </NavLink>
        <p className="button_big--item"></p>
      </div>
    </Big_button>
  );
}
