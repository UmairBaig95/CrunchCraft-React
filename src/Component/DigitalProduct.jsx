import React from "react";
import { DigitalProductData } from "../constant/crunchCraft";
import Lottie from "./Lottie";
import BgDesign from "../assets/images/footerImages/bg-design.svg";
function DigitalProduct() {
  return (
    <>
      <section className="container digitalProduct">
        <div className="row">
          <div className="col-md-6">
            <div className="py-md-5">
              <img className="design py-4 py-md-0"  src={BgDesign} alt="Footer Design" />
            </div>
            <h1 className="digitalProduct__heading">
              {DigitalProductData.heading}
            </h1>
            <p className="digitalProduct__paragraph py-md-4">
              {DigitalProductData.content}
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <Lottie />
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalProduct;
