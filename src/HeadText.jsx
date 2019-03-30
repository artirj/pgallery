import React, { Component } from "react";
import "./HeadText.css";

class HeadText extends Component {
  render() {
    return (
      // https://speckyboy.com/css-retro-type-effects/
      <div className="HeadText">
        <section class="text">
          <h3>The Pioneer</h3>
          <h1>
            <span class="fontawesome-star star" /> <span>Hall of Fame</span>{" "}
            <span class="fontawesome-star star" />
          </h1>
        </section>
      </div>
    );
  }
}

export default HeadText;
