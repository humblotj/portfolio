import React, { Component, RefObject } from "react";
import "./Skills.scss";

import skills from "../data/skills.json";
import { ReactSVG } from "react-svg";

export default class Skills extends Component<{
  refProp: RefObject<any>;
}> {
  render() {
    return (
      <section ref={this.props.refProp} className="skills">
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
      </section>
    );
  }
}
