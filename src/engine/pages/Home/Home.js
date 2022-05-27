import React from "react";
import { NavLink } from "react-router-dom";
import Explore_Button from "../../components/Btn/Explore_Button/Explore_Button";
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
      <Explore_Button></Explore_Button>
    </Home_Container>
  );
}
