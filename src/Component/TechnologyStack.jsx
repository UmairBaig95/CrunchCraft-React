import React from "react";
import { ourTechData } from "../constant/crunchCraft";
export default function TechnologyStack() {
  return (
    <section id="technologyStack" className="technologyStack py-md-5">
      <div className="container technologyStack__container">
        <span>{ourTechData.title}</span>
        <h2 className="technologyStack__container--heading">
          {ourTechData.heading}
        </h2>
        {ourTechData.details.map((e, i) => {
          return (
              <div key={i} className="row technologyStack__row">
                <div className="col-md-12">
                  <h3 className="technologyStack__row--heading">{e.title}</h3>
                  <img src={e.img} alt="Tech Stack" />
                </div>
              </div>
          );
        })}
      </div>
    </section>
  );
}
