import React, { Component } from "react";
import Face from "./Face";
import { Container, Carousel, Row, Jumbotron } from "react-bootstrap";
import "./Carousel.css";
let data = require("./data.json");
class MyCarousel extends Component {
  faces = data.map(pioneer => {
    return (
      <Carousel.Item key={pioneer["image"]}>
        <Jumbotron>
          <Face sourceData={pioneer} />
        </Jumbotron>
      </Carousel.Item>
    );
  });
  render() {
    return (
      <div className="MyCarousel">
        <Container>
          <Row>
            <Carousel interval={null}>{this.faces}</Carousel>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyCarousel;
