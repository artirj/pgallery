import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import Face from "./Face";
import { Carousel } from "react-motion-components";
import { chunk } from "./utils.js";
import "./Gallery.css";

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIdx: 0
    };
  }

  faces = this.props.data.map((pioneer, idx) => {
    return (
      <Col key={idx} lg={3} md={4} sm={12} xl={2}>
        <Face
          image={pioneer["image"]}
          name={pioneer["name"]}
          clickHandler={this.props.clickHandler}
          idx={idx}
        />
      </Col>
    );
  });
  chunkedFaces = () => {
    const chunks = chunk(this.faces, 3);
    return chunks.map((row, rownumber) => {
      return <Row key={rownumber}>{row}</Row>;
    });
  };
  correctRotation = idx => {
    return { transform: `translateY(${-idx * 10}px)` };
  };
  handleKeyPress = event => {
    if (event.key === "ArrowDown") {
      this.setState({ carouselIdx: this.state.carouselIdx + 1 });
    } else if (event.key === "ArrowUp") {
      this.setState({ carouselIdx: this.state.carouselIdx - 1 });
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className="ImageGrid">
        <div className="d-none d-md-block" id="chooseP">
          <h1>Choose your Pioneer!</h1>
        </div>

        <Row noGutters={false}>{this.faces}</Row>
        {/* <div id="carousel" style={this.state.style}> */}
        {/* <Carousel
            width={"100%"}
            height={200}
            direction={"vertical"}
            effect={"3d"}
            index={this.state.carouselIdx}
          >
            {this.chunkedFaces()}
          </Carousel> */}
        {/* </div> */}
      </div>
    );
  }
}

export default ImageGrid;
