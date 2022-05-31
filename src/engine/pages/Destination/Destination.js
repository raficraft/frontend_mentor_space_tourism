import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { DestinationContainer } from "./Destination.css";
import Loader from "../../Loader/Loader";

export default function Destination() {
  const location = useLocation();
  const FIELDS = location.pathname.substring(1);
  const [data] = useFetch("data.json", FIELDS);
  const [current, setCurrent] = useState(0);

  function createNav() {
    return (
      <nav>
        {data.items.map((el, key) => {
          return (
            <a
              className="nav_tabs"
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
    return (
      <section className="destination_content">
        <div className="destination_content--left">
          <img
            src={data.items[current].images.webp}
            srcSet={`${data.items[current].images.png}, ${data.items[current].images.webp}`}
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
              <p className="subHeading_1">{data.items[current].distance}</p>
            </div>
            <div>
              <p className="subHeading_2">Est. travel time</p>
              <p className="subHeading_1">{data.items[current].travel}</p>
            </div>
          </footer>
        </div>
      </section>
    );
  }

  return (
    <>
      {data.loading ? (
        <Loader></Loader>
      ) : (
        <DestinationContainer>
          <div className="destination">
            <header className="pages_header">
              <h5>
                <span>01</span>Pick your destination
              </h5>
            </header>
            {createItem()}
          </div>
        </DestinationContainer>
      )}
    </>
  );
}
