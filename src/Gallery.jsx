import React, { Component } from "react";
import Face from "./Face";
import { Container, Row, Col } from "react-bootstrap";
let data = require("./data.json");
class Gallery extends Component {
  faces = data.map(pioneer => {
    return <Face sourceData={pioneer} key={pioneer["image"]} />;
  });
  render() {
    return (
      <div className="Gallery">
        <h1>{"Gallery goes here"}</h1>
        <Container>{this.faces}</Container>
      </div>
    );
  }
}

export default Gallery;
