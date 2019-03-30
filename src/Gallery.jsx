import React, { Component } from "react";
import Face from "./Face";
import { Container, Row, Col } from "react-bootstrap";
class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <h1>{"Gallery goes here"}</h1>
        <Container>
          <Row>
            <Col>
              <Face sourceImage="secondpost.png" />
              <Face sourceImage="pio3-2.png" />
            </Col>
            <Col>Some text</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
