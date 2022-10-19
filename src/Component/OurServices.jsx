import React from "react";
import { ourServicesData } from "../constant/crunchCraft";
import Design from "../assets/images/footerImages/bg-design.svg";

function OurServices() {
  return (
    <section id="OurServices" className="ourServices my-md-5">
      <div className="container ourServices__container">
        <div className="row ourServices__row">
          <div className="col-md-6 ourServices__row">
            <span>{ourServicesData.title}</span>
            <h2 className="ourServices__row--heading py-md-3">
              {ourServicesData.heading}
            </h2>
            <p className="ourServices__row--content">
              {ourServicesData.content}
            </p>
            <img className="py-md-3 design" src={Design} alt="Design Img" />
          </div>
          <div className="col-md-6 ourServices__row--img">
            <img src={ourServicesData.img} alt="Our Service" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
