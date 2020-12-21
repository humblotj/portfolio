/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { hot } from "react-hot-loader/root";

import "./App.scss";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);

  const [showSidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar((prevShowSidebar) => !prevShowSidebar);

  const closeSidebar = (event: React.MouseEvent<HTMLElement>) => {
    if (showSidebar) {
      event.stopPropagation();
      event.preventDefault();
      setSidebar(false);
    }
  };

  return (
    <div className={"App" + (showSidebar ? " menu-visible" : "")}>
      <a href="#" className={"menu-toggle"} onClick={toggleSidebar}>
        <i></i>
      </a>
      <Sidebar
        showSidebar={showSidebar}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
      ></Sidebar>
      <div className="main" onClick={(event) => closeSidebar(event)}>
        <About refProp={aboutRef}></About>
        <Skills refProp={skillsRef}></Skills>
        <Portfolio refProp={portfolioRef}></Portfolio>
      </div>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
