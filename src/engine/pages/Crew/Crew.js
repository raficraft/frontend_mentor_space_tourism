import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Crew_Container } from "./Crew.css";

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
      <section class="crew_content">
        <div class="crew_content--left">
          <article>
            <header>
              <h4>{data.items[current].role}</h4>
              <h3>{data.items[current].name}</h3>
            </header>
            <p class="text">{data.items[current].bio}</p>
          </article>

          <footer>
            <nav className="nav_dotted">{createNav()}</nav>
          </footer>
        </div>
        <div class="crew_content--right">
          <div>
            <img src={data.items[current].images.png} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <Crew_Container>
      <div className="crew">
        <header className="pages_header">
          <h5>
            <span>02</span>Meet your crew
          </h5>
        </header>

        {!data.loading ? createItem() : <h2>...loading</h2>}
      </div>
    </Crew_Container>
  );
}
