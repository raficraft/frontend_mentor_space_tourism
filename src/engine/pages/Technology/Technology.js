import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Tech_Container } from "./Technology.css";

export default function Technology() {
  const location = useLocation();
  const DATA_TYPE = location.pathname.substring(1);

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
              <p className="subHeading_2">The terminology</p>
              <h3>{data.items[current].name}</h3>
            </header>
            <p className="text">{data.items[current].description}</p>
          </article>
        </div>
        <div className="tech_content--right">
          <div>
            <img src={data.items[current].images.portrait} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <Tech_Container>
      <div className="tech">
        <header className="pages_header">
          <h5>
            <span>03</span>Space launch 101
          </h5>
        </header>
        {!data.loading ? createItem() : <h2>...loading</h2>}
      </div>
    </Tech_Container>
  );
}
