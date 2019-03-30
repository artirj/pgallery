import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import Face from "./Face";

class ImageGrid extends Component {
  faces = this.props.data.map((pioneer, idx) => {
    return (
      <Col key={idx} md={4}>
        <Face
          image={pioneer["image"]}
          name={pioneer["name"]}
          clickHandler={this.props.clickHandler}
          idx={idx}
        />
      </Col>
    );
  });
  render() {
    return (
      <div className="ImageGrid">
        <h1>Choose your Pioneer!</h1>
        <Row>{this.faces}</Row>
      </div>
    );
  }
}

export default ImageGrid;
