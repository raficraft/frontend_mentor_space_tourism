import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../Loader/Loader";
import { CrewContainer } from "./Crew.css";

export default function Crew() {
  const DATA_TYPE = "crew";

  const [data] = useFetch("data.json", DATA_TYPE);
  const [current, setCurrent] = useState(0);

  function createNav() {
    return (
      <nav>
        {data.items.map((el, key) => {
          return (
            <button
              key={key}
              onClick={() => {
                setCurrent(key);
              }}
              data-active={current === key ? "true" : "false"}
            ></button>
          );
        })}
      </nav>
    );
  }

  function createItem() {
    console.log(data.items[current]);
    return (
      <section className="crew_content">
        <div className="crew_content--left">
          <article>
            <header>
              <h4>{data.items[current].role}</h4>
              <h3>{data.items[current].name}</h3>
            </header>
            <p className="text">{data.items[current].bio}</p>
          </article>

          <footer>
            <nav className="nav_dotted">{createNav()}</nav>
          </footer>
        </div>
        <div className="crew_content--right">
          <div className="img_container">
            <img
              src={data.items[current].images.webp}
              alt={`illustration of crew page, portrait of ${data.items[current].name}`}
              srcSet={`${data.items[current].images.png} , ${data.items[current].images.webp}`}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {data.loading ? (
        <Loader></Loader>
      ) : (
        <CrewContainer>
          <div className="crew">
            <header className="pages_header">
              <h5>
                <span>02</span>Meet your crew
              </h5>
            </header>

            {createItem()}
          </div>
        </CrewContainer>
      )}
    </>
  );
}
