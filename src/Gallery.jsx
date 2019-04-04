import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./Carousel";
import ImageGrid from "./ImageGrid";
import "./Gallery.css";
import HeadText from "./HeadText";

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
            <Col>
              <HeadText />
            </Col>
          </Row>
          <Row>
            <Col md={7} sm={3}>
              <ImageGrid data={data} clickHandler={this.setGalleryIndex} />
            </Col>
            <Col md={5} sm={9}>
              <MyCarousel data={data} index={this.state.index} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
