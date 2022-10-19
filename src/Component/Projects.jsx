import React from "react";
import { ourWorkData } from "../constant/crunchCraft";
import Design from "../assets/images/footerImages/bg-design.svg";
import Button from "./Button";
export default function Projects() {
  return (
    <>
      <section id="ourWork" className="ourWork bg-colorLightPink">
        <div className="container ourWork__container">
          <div className="row ourWork__row2">
            {ourWorkData.Details.map((e, i) => {
              return (
                <div
                  id={e.id}
                  key={e.id}
                  className="col-md-6 ourWork__row2--card"
                >
                  <div className="ourWork__row2--cardBody">
                    <img
                      className={`ourWork__row2--img ${e.backgroundcolor}`}
                      src={e.img}
                      alt="Our Work Cards"
                    />
                    <h3 className="ourWork__row2--heading">{e.title}</h3>
                    <p className="ourWork__row2--content">{e.content}</p>
                    <Button btnText={e.button} path={e.path}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
