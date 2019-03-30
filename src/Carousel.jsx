import React, { Component } from "react";
import FaceWithBio from "./FaceWithBio";
import { Carousel, Jumbotron } from "react-bootstrap";
import "./Carousel.css";

class MyCarousel extends Component {
  faces = this.props.data.map(pioneer => {
    return (
      <Carousel.Item key={pioneer["image"]}>
        <Jumbotron>
          <FaceWithBio sourceData={pioneer} />
        </Jumbotron>
      </Carousel.Item>
    );
  });

  render() {
    return (
      <div className="MyCarousel">
        <Carousel interval={null}>{this.faces}</Carousel>
      </div>
    );
  }
}

export default MyCarousel;
