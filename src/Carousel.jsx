import React, { Component } from "react";
import FaceWithBio from "./FaceWithBio";
import { Card } from "react-bootstrap";
import "./Carousel.css";
import Tilt from "react-tilt";
class MyCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: this.props.index,
      direction: null
    };
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    let pioneer = this.props.data[this.props.index];

    return (
      <div className="MyCarousel">
        <Tilt options={{ max: 10 }}>
          <Card>
            <Card.Body>
              <Card.Title>{pioneer["name"]}</Card.Title>
              <FaceWithBio sourceData={pioneer} />
            </Card.Body>
          </Card>
        </Tilt>
      </div>
    );
  }
}

export default MyCarousel;
