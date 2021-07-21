import React from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="Home section">
      <div className="iam">I am</div>
      <motion.div
        layoutId="main-name"
        transition={{ duration: 1 }}
        className="name title gradient"
      >
        NIKHIL
      </motion.div>
      <div className="typewriter iam">
        <Typewriter
          options={{
            strings: ["Photographer", "Creator", "Designer"],
            autoStart: true,
            loop: true,
            cursor: "_"
          }}
        />
      </div>
      <div className="home__action">
        <Button text="GET IN TOUCH" icon="ri-contacts-book-line" />
        <div className="scroll__text">
          SCROLL TO KNOW MORE
          <img
            className="scroll__icon"
            src={require("../../assets/scroll_aicon.gif")}
            draggable="false"
            alt="scroll"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
