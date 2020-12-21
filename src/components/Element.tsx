import React, { Component } from "react";
import { ScrollElement } from "react-scroll";

class Element extends Component<any> {
  render() {
    return (
      <section
        {...this.props}
        ref={(el) => {
          this.props.parentBindings.domNode = el;
        }}
      >
        {this.props.children}
      </section>
    );
  }
}

export default ScrollElement(Element);
