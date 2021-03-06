/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Sidebar.scss";
import photo from "../assets/Photo.jpg";
import { ReactComponent as EmailIcon } from "../assets/icons/email-outline.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";
import { Link } from "react-scroll";
export default class Sidebar extends Component<{
  showSidebar: boolean;
}> {
  render() {
    const { showSidebar } = this.props;
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
              <Link activeClass="active" to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
              >
                Portfolio
              </Link>
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
