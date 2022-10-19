import React, { useState, useEffect } from "react";
import Icon from "../assets/svg/Icons";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { headerLinks, footerData } from "../constant/crunchCraft";
import BarIcon from "../assets/images/headerImages/open-logo.png";
import CloseIcon from "../assets/images/headerImages/close-logo.png";

function Header() {
  const [chk, setChk] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  useEffect(() => {
    if (toggle === true) {
      setTimeout(() => {
        setToggle(false);
      }, 1000);
    }
  }, [toggle]);
  return (
    <header
      id="headerNavbar"
      className={`header ${scroll ? "shadow p-1" : ""}`}
    >
      <div className="container">
        <div className="row">
          <nav className="navbar   navbar-light header__navbar navbar-expand-md">
            <Link className="navbar-brand header__logo" type="button" to="/">
              <Icon name="crunchCraftLogo" color="#3aa5a9" size="50" />
            </Link>
            <button
              className="navbar-toggler navbar-toggler-button d-flex d-lg-none flex-column justify-content-around"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              onClick={() => {
                setChk(!chk);
              }}
            >
              <span className={`${chk ? "d-none" : ""}`}>
                <img src={BarIcon} alt="aaaaa" />
              </span>
              <span className={`${chk ? "" : "d-none"}`}>
                <img src={CloseIcon} alt="cccc" />
              </span>
            </button>
            <div
              className={`navbar-collapse  header__links-box    collapse justify-content-end ${
                toggle ? "collapse" : ""
              }`}
              id="navbar"
            >
              {headerLinks.map((e, i) => {
                return (
                  <div
                    onClick={() => {
                      setToggle(true);
                      setChk(false);
                    }}
                    key={i}
                    className="nav-item"
                  >
                    <HashLink
                      className="nav-link header__links-box--links"
                      to={e.path}
                    >
                      {e.name}
                    </HashLink>
                  </div>
                );
              })}
              <div
                    onClick={() => {
                      setToggle(true);
                      setChk(false);
                    }}
                    className="nav-item d-md-none d-block"
                  >
                    <Link
                      className="nav-link header__links-box--links"
                      to="/contactUs"
                    >
                      Contact Us
                    </Link>
                  </div>
              <div className="col-md-6 col-sm-12 d-flex d-md-none justify-content-center header__links-box--socialLink">
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
            <Link className="navbar-brand d-md-block d-none" to="/contactUs">
              <Icon name="contactUsLogo" size="50" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
