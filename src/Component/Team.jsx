import React from "react";
import { TeamAugmentation } from "../constant/crunchCraft";
import Design from "../assets/images/footerImages/bg-design.svg";
import Button from "./Button";
export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="row team__row">
          <div className="col-md-6">
            <span className="team__row--title">{TeamAugmentation.title}</span>
            <h2 className="py-md-3 team__row--heading">
              {TeamAugmentation.heading}
            </h2>
            <p className="team__row--content">{TeamAugmentation.content}</p>
            <img className="py-md-5 design" src={Design} alt="Design Img" />
            <Button btnText={TeamAugmentation.button} path={TeamAugmentation.path} />
          </div>
          <div className="col-md-6">
            <img src={TeamAugmentation.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
