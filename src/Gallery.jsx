import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./Carousel";
import ImageGrid from "./ImageGrid";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <Container fluid={true}>
          <Row>
            <Col md={6}>
              <ImageGrid data={this.props.data} />
            </Col>
            <Col md={6}>
              <MyCarousel data={this.props.data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
