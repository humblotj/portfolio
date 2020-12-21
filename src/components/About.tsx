import React, { Component } from "react";
import "./About.scss";
import Element from "./Element";

export default class About extends Component {
  render() {
    return (
      <Element name="about" className="about">
        <header>
          <h2>About</h2>
        </header>
        <div>
          <h3>Hi! I'm Jean, a French software developer based in Seoul.</h3>
          <p>
            I am graduate from a French school engineering with a Master of
            Science degree. I worked for several Korean start-ups where I
            learned how to work independently but also in a team and
            successfully build something from the ground up. I am looking for
            new exciting challenges and opportunities to support a new company
            to build their next big things.
          </p>
        </div>
      </Element>
    );
  }
}
