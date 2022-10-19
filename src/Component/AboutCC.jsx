import React from "react";
import { AboutCrunchCraft } from "../constant/crunchCraft";
function AboutCC() {
  return (
    <section id="aboutSection" className="bg-colorLightPink py-md-5 aboutCC ">
      <div className="container aboutCC__container">
        <div className="row  aboutCC__row bg-colorDarkGreen">
          <div className="col-md-8">
            <h2 className="aboutCC__row--heading ">
              {AboutCrunchCraft.heading}
            </h2>
            <p className="aboutCC__row--content">
              {AboutCrunchCraft.content.content_1}
            </p>
            <p className="aboutCC__row--content ">
              {AboutCrunchCraft.content.content_2}
            </p>
          </div>
          <div className="col-md-4">
            <img src={AboutCrunchCraft.img} alt="AboutCrunchCraftImage" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCC;
