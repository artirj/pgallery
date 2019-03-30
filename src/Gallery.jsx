import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./Carousel";
import ImageGrid from "./ImageGrid";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  setGalleryIndex = index => {
    this.setState({
      index: index
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="Gallery">
        <Container fluid={true}>
          <Row>
            <Col md={6}>
              <ImageGrid data={data} clickHandler={this.setGalleryIndex} />
            </Col>
            <Col md={6}>
              <MyCarousel data={data} index={this.state.index} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
