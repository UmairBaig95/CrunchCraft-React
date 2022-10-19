import React from "react";
import {HashLink} from 'react-router-hash-link'
import { Link } from "react-router-dom";
import { footerData, headerLinks } from "../constant/crunchCraft";
import Button from "../Component/Button";
import Icon from "../assets/svg/Icons";
import BgDesign from "../assets/images/footerImages/bg-design.svg";
function Footer() {
  return (
    <footer className="footer bg-colorLightPink my-md-5 py-md-5">
      <div className="container footer__container">
        <div className="footer__container--text">{footerData[0].text}</div>
        <div className="footer__design">
          <img src={BgDesign} alt="Footer Design" />
        </div>
        <div className="footer__container--btn">
          <Button btnText={footerData[0].button} path={"/contactUs"} />
        </div>

        <div className="row footer__row bg-colorDarkGreen">
          <div className="col-md-6 d-md-block d-none">
            <Link className="navbar-brand footer__row--logo" to="/">
              <Icon name="crunchCraftLogo" color="white" size="50" />
            </Link>
            {headerLinks.map((e, i) => {
              return (
                <HashLink key={i} className="footer__row--links" to={e.path}>
                  {e.name}
                </HashLink>
              );
            })}
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-end">
            {footerData[0].socialLinks.map((e, i) => {
              return (
                <div key={i} className="footer__row--socialIcon">
                  <a target="_blank" rel="noreferrer" href={e.path}>
                    <Icon name={e.name} color={e.color} size={e.size} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
