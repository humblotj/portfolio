import React, { Component, RefObject } from "react";

export default class About extends Component<{
  refProp: RefObject<any>;
}> {
  render() {
    return (
      <section ref={this.props.refProp}>
        <header>
          <h2>About</h2>
        </header>
      </section>
    );
  }
}
