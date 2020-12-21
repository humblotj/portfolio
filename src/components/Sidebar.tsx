/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, RefObject } from "react";
import "./Sidebar.scss";
import photo from "../assets/Photo.jpg";
import { ReactComponent as EmailIcon } from "../assets/icons/email-outline.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";

export default class Sidebar extends Component<{
  showSidebar: boolean;
  aboutRef: RefObject<any>;
  skillsRef: RefObject<any>;
  portfolioRef: RefObject<any>;
}> {
  render() {
    const { showSidebar, aboutRef, skillsRef, portfolioRef } = this.props;
    return (
      <aside className={showSidebar ? "active" : ""}>
        <div className="profile">
          <img src={photo} alt="" />
          <h1>Jean Humblot</h1>
          <span className="position">
            <strong>FrontEnd Developer</strong>
            &nbsp;in Seoul
          </span>
          <span className="email">
            <EmailIcon />
            jhumblot1@gmail.com
          </span>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    behavior: "smooth",
                    top: aboutRef.current.offsetTop,
                  });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    behavior: "smooth",
                    top: skillsRef.current.offsetTop,
                  });
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    behavior: "smooth",
                    top: portfolioRef.current.offsetTop,
                  });
                }}
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
        <div className="links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jean-h-25b1871a0/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/humblotj">
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
