import React, { Component } from "react";
import Face from "./Face";
import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./Carousel";
let data = require("./data.json");
class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <h1>{"Gallery goes here"}</h1>
        <Container>
          <Row>
            <MyCarousel />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
