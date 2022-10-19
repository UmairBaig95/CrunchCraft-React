import React from "react";
import Design from "../assets/images/footerImages/bg-design.svg";
import { ourProductsData } from "../constant/crunchCraft";

function LearnGoRetailry() {
  return (
    <section id="learnGoRetailry">
      {ourProductsData.map((e, i) => {
        return (
          <div className="learngo my-md-4" key={e.id} id={e.id}>
            <div className="container learngo__container">
              <div className="row learngo__row">
                <div className="col-md-4">
                  <h6 className="learngo__row--title py-md-2">{e.title}</h6>
                  <img
                    className="learngo__row--logo"
                    src={e.logo}
                    alt="Learnigo/Retailry"
                  />
                  <span className="learngo__row--logoTitle">{e.subtitle}</span>
                  <div className="learngo__row--heading">{e.heading}</div>
                  <p className="learngo__row--content">{e.content}</p>
                  <img
                    className="py-md-5 py-4 design"
                    src={Design}
                    alt="Common web Design"
                  />
                  <div className="my-3 text-center">
                    <a href={e.path} target="_blank" rel="noreferrer" className="coustom-btn">
                      {e.button}
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="img-div d-none d-md-block">
                    <img src={e.img} alt="SectionImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default LearnGoRetailry;
