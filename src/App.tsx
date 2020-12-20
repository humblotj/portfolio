/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";

import "./App.scss";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  const [showSidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!showSidebar);

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
      <Sidebar showSidebar={showSidebar}></Sidebar>
      <div className="main" onClick={(event) => closeSidebar(event)}>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
