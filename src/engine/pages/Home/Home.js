import React from "react";
import { NavLink } from "react-router-dom";
import { Home_Container } from "./Home.css";

export default function Home() {
  return (
    <Home_Container data-testid="home_container">
      <div className="home_content home_content--left">
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p className="text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="home_content home_content--right">
        <div className="button_big">
          <NavLink to="/destination" className="button_big--link">
            <span className="button_big--text">Explore</span>
          </NavLink>
          <span className="button_big--item"></span>
        </div>
      </div>
    </Home_Container>
  );
}
