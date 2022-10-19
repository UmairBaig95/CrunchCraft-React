import React from "react";
import Design from "../assets/images/footerImages/bg-design.svg";
import Careers from "../../src/assets/images/Careers/careers.png";
import { footerData } from "../constant/crunchCraft";
import Icon from "../assets/svg/Icons";
export default function JoinOurTeam() {
  return (
    <section id="JoinOurTeam" className="joinOurTeam">
      <div className="container joinOurTeam__container">
        <div className="row joinOurTeam__row">
          <div className="col-md-6">
            <img className="py-md-5 design" src={Design} alt="Design Img" />
            <h2 className="joinOurTeam__row--heading">
              Join our team and be a part of the growing organization
            </h2>
            <div className="col-md-6 col-sm-12 d-flex justify-content-start">
              {footerData[0].socialLinks.map((e, i) => {
                return (
                  <div key={i} className="joinOurTeam__row--socialIcon">
                    <a target="_blank" rel="noreferrer" href={e.path}>
                      <Icon name={e.name} color={"#ffffff"} size={e.size} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <img src={Careers} alt="Careers" />
          </div>
        </div>
      </div>
    </section>
  );
}
