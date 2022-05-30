import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { TechContainer } from "./Technology.css";
import useMediaQuery from "../../hooks/useMediaQueries";
import Loader from "../../Loader/Loader";

export default function Technology() {
  const location = useLocation();
  const DATA_TYPE = location.pathname.substring(1);
  const isTablet = useMediaQuery("(max-width: 1000px)");

  const [data] = useFetch("data.json", DATA_TYPE);
  const [current, setCurrent] = useState(0);

  function createNav() {
    return (
      <nav>
        {data.items.map((el, key) => {
          return (
            <button
              key={key}
              data-active={key === current ? "true" : "false"}
              onClick={() => {
                setCurrent(key);
              }}
            >
              {key + 1}
            </button>
          );
        })}
      </nav>
    );
  }

  function createItem() {
    console.log(data.items[current]);
    return (
      <section className="tech_content">
        <div className="tech_content--left">
          <aside>
            <nav>{createNav()}</nav>
          </aside>
          <article>
            <header>
              <p className="subHeading_2">The terminology...</p>
              <h3>{data.items[current].name}</h3>
            </header>
            <p className="text">{data.items[current].description}</p>
          </article>
        </div>
        <div className="tech_content--right">
          <figure>
            <img
              src={
                isTablet
                  ? data.items[current].images.landscape
                  : data.items[current].images.portrait
              }
              alt={data.items[current].name}
            />
          </figure>
        </div>
      </section>
    );
  }

  return (
    <>
      {data.loading ? (
        <Loader></Loader>
      ) : (
        <TechContainer>
          <div className="tech">
            <header className="pages_header">
              <h5>
                <span>03</span>Space launch 101
              </h5>
            </header>
            {createItem()}
          </div>
        </TechContainer>
      )}
    </>
  );
}
