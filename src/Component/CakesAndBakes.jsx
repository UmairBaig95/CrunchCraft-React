import React from "react";
import { CB } from "../constant/crunchCraft";
import Design from "../assets/images/footerImages/bg-design.svg";

const CakesAndBakes = (props) => {
  return (
    <section id="cakesAndBakes" className="cb">
      <div className="container-fluid cb__container">
        <div className="row cb__row">
          <div className="col-md-6 ">
            <h2 className="cb__row--title">{CB.heading}</h2>
            <div className="row">
              <div className="col-md-6 col-6 cb__row--col">
                <h5 className="cb__row--label">Skills</h5>
                <ul className="cb__row--skills">
                  {CB.Skills.map((e, i) => {
                    return <li className="">{e}</li>;
                  })}
                </ul>
              </div>
              <div className="col-md-6 col-6  cb__row--col">
                <h5 className="cb__row--label">Date</h5>
                <span className="cb__row--date">{CB.Date}</span>
              </div>
            </div>
            <img className="design" src={Design} alt="" />
          </div>

          <div className="col-md-6 cb__row--img">
            <img src={CB.img} alt="CB" />
          </div>
        </div>
        <div className="row cb__row2">
          {CB.sampleImg.map((e, i) => {
            return (
              <>
                <div className="col-md-2 col-1"></div>
                <div className="col-md-8 col-10 cb__row2--div">
                  <img src={e} alt="sampleImg" />
                </div>
                <div className="col-md-2 col-1"></div>
              </>
            );
          })}
        </div>
        <div className="my-3 cb__row2--website">
          <a
            href={CB.website}
            target="_blank"
            rel="noreferrer"
            className="coustom-btn"
          >
            {CB.website}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CakesAndBakes;
