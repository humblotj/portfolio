import React, { Component } from "react";
import "./Skills.scss";

import skills from "../data/skills.json";
import { ReactSVG } from "react-svg";
import Element from "./Element";

export default class Skills extends Component {
  render() {
    return (
      <Element name="skills" className="skills">
        <header>
          <h2>Skills</h2>
        </header>
        <dl>
          <dt>Front-end:</dt>
          <dd>
            <ol className="skill-list">
              {skills
                .filter((skill) => skill.type === "frontend")
                .map((skill) => (
                  <li key={skill.name} className="skill-container">
                    <ReactSVG
                      className="icon"
                      src={"icons/" + skill.path + ".svg"}
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
            </ol>
          </dd>
          <dt>Back-end:</dt>
          <dd>
            <ol className="skill-list">
              {skills
                .filter((skill) => skill.type === "backend")
                .map((skill) => (
                  <li key={skill.name} className="skill-container">
                    <ReactSVG
                      className="icon"
                      src={"icons/" + skill.path + ".svg"}
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
            </ol>
          </dd>
          <dt>Other:</dt>
          <dd>
            <ol className="skill-list">
              {skills
                .filter((skill) => skill.type === "other")
                .map((skill) => (
                  <li key={skill.name} className="skill-container">
                    <ReactSVG
                      className="icon"
                      src={"icons/" + skill.path + ".svg"}
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
            </ol>
          </dd>
        </dl>
      </Element>
    );
  }
}
