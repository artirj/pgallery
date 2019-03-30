import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./Carousel";
import Face from "./Face";

class ImageGrid extends Component {
  faces = this.props.data.map(pioneer => {
    return (
      <Col key={pioneer["image"]} md={3} lg={3}>
        <Face image={pioneer["image"]} name={pioneer["name"]} />
      </Col>
    );
  });
  render() {
    return (
      <div className="ImageGrid">
        <Row>{this.faces}</Row>
      </div>
    );
  }
}

export default ImageGrid;
