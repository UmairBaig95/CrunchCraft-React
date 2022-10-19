import React, { useState } from "react";
import { Openings } from "../constant/crunchCraft";
export default function Position() {
  const [displaySkills, setDisplaySkills] = useState(false);
  return (
    <section id="positionAvaliable" className="Careers bg-colorLightPink">
      <div className="container Careers__container">
        <div className="container Careers__title">
          <span>Join Our Team</span>
          <h3 className="Careers__title--heading">Positions Available</h3>
        </div>

        <div
          onClick={() => setDisplaySkills(!displaySkills)}
          className="row Careers__row"
        >
          <div className="col-md-6 Careers__row--title">{Openings.title}</div>

          <div className="col-md-3 col-lg-3 col-xl-4 Careers__row--date">
            <span>Posted</span>
            <h6>{Openings.Date}</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2">
            <button
              onClick={() => setDisplaySkills(!displaySkills)}
              className="Careers__row--button"
            >
              {Openings.button}
            </button>
          </div>
        </div>
        <div
          className={`Careers__row--SkillSet ${
            displaySkills ? "hide-box" : ""
          }`}
        >
          <div className="p-4 p-md-5">
            <h3 className="Careers__row--SkillSet--heading">
              {Openings.Qualification}
            </h3>
            {Openings.skillSet.map((e, i) => {
              return (
                <ul className="Careers__row--SkillSet--list">
                  <li>{e}</li>
                </ul>
              );
            })}
            <h3 className="Careers__row--SkillSet--heading">
              Technologies used
            </h3>
            <span>{Openings.Technologies}</span>
            <h3 className="Careers__row--SkillSet--heading">
              Send your resume and portfolio at
            </h3>
            <span>{Openings.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
