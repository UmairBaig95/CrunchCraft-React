import React from "react";
import { services } from "../constant/crunchCraft";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Services() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section id="services" className="services py-md-4">
      <div className="container px-md-5 py-md-5 services__container">
        <div className="row services__row">
          <Slider {...settings}>
            {services.map((e, i) => {
              return (
                <div key={i} className="col-md-3 services__row--div">
                  <img className="my-md-3" src={e.img} alt="Service Img" />
                  <div className="services__row--title">{e.title}</div>
                  <p>{e.content}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Services;
