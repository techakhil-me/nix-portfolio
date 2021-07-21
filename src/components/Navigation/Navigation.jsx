import React,{ useState } from "react";
import "./Navigation.css";
import Button from "../Button/Button";




function Navigation() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? 'open Navigation': "Navigation"}>
      <div className="Navbar">
        <i className="ri-menu-line hamburger" onClick={toggleClass}></i>
        <div className="brand">NIKHIL</div>
        <div className="brand__logo">
          <i className="ri-netflix-fill"></i>
        </div>
      </div>
      <div className="Menu">
        <div className="Explore menu_section">
          <div className="Explore__title menu_title">
            EXPLORE <div className="hline"></div>
          </div>
          <a href="#" className="link link--leda" data-text="WORK">
            <span>WORK</span>
          </a>
          <a href="#" className="link link--leda" data-text="ABOUT">
            <span>ABOUT</span>
          </a>
          <a href="#" className="link link--leda" data-text="CONTACT">
            <span>CONTACT</span>
          </a>
        </div>
        <div className="More menu_section">
          <div className="Menu__title menu_title">
            MENU <div className="hline"></div>
          </div>
          <Button text="RESUME" icon="ri-file-line"/>
          <Button text="EMAIL" icon="ri-mail-line"/>
        </div>
        <div className="Disclaimer">made with <i className="ri-heart-2-fill"></i> 2021</div>
      </div>
    </div>
  );
}

export default Navigation;
