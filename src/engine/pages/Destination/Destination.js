import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Destination_Container } from "./Destination.css";

export default function Destination() {
  const location = useLocation();
  const DATA_TYPE = location.pathname.substring(1);

  const [data] = useFetch("data.json", DATA_TYPE);
  const [current, setCurrent] = useState(0);

  function createNav() {
    return (
      <nav>
        {data.items.map((el, key) => {
          return (
            <a
              href="#"
              key={key}
              data-active={key === current ? "true" : "false"}
              onClick={(e) => {
                e.preventDefault();
                setCurrent(key);
              }}
            >
              {el.name}
            </a>
          );
        })}
      </nav>
    );
  }

  function createItem() {
    console.log(data.items[current]);
    return (
      <section className="destination_content">
        <div className="destination_content--left">
          <img
            src={data.items[current].images.png}
            alt={`illustration of ${data.items[current].name}`}
          />
        </div>

        <div className="destination_content--right">
          {createNav()}
          <div>
            <header>
              <h2>{data.items[current].name}</h2>
            </header>
            <p className="text">{data.items[current].description}</p>
          </div>
          <footer>
            <div>
              <p className="subHeading_2">Avg. distance</p>
              <h4>{data.items[current].distance}</h4>
            </div>
            <div>
              <p className="subHeading_2">Est. travel time</p>
              <h4>{data.items[current].travel}</h4>
            </div>
          </footer>
        </div>
      </section>
    );
  }

  return (
    <Destination_Container>
      <div className="destination">
        <header className="pages_header">
          <h5>
            <span>01</span>Pick up your destination
          </h5>
        </header>
        {!data.loading ? createItem() : <h2>...loading</h2>}
      </div>
    </Destination_Container>
  );
}
