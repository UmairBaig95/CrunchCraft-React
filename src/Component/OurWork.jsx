import React from "react";
import { ourWorkData } from "../constant/crunchCraft";
import Design from "../assets/images/footerImages/bg-design.svg";
import Button from "./Button";
import Projects from "./Projects";

function OurWork() {
  return (
    <section id="ourWork" className="ourWork bg-colorLightPink">
      <div className="container ourWork__container">
        <div className="row ourWork__row1">
          <div className="col-md-6">
            <span className="ourWork__row1--title">{ourWorkData.title}</span>
            <h2 className="py-md-3 ourWork__row1--heading">
              {ourWorkData.heading}
            </h2>
            <p className="ourWork__row1--content">{ourWorkData.content}</p>
            <img
              className="py-md-5 py-3 design"
              src={Design}
              alt="Design Img"
            />
            <Button btnText={ourWorkData.button} path={ourWorkData.path} />
          </div>
          <div className="col-md-6"></div>
        </div>
        <Projects />
        <img className="py-md-5 design" src={Design} alt="Design Img" />
        <div className="circle"></div>
      </div>
    </section>
  );
}

export default OurWork;
