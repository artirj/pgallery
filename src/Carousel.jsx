import React, { Component } from "react";
import FaceWithBio from "./FaceWithBio";
import { Carousel, Card } from "react-bootstrap";
import "./Carousel.css";

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
  faces = this.props.data.map((pioneer, idx) => {
    return (
      <Carousel.Item key={idx}>
        <Card>
          <Card.Body>
            <Card.Title>{pioneer["name"]}</Card.Title>
            <FaceWithBio sourceData={pioneer} />
          </Card.Body>
        </Card>
      </Carousel.Item>
    );
  });

  render() {
    return (
      <div className="MyCarousel">
        <Carousel
          interval={null}
          fade={true}
          activeIndex={this.props.index}
          indicators={false}
          onSelect={this.handleSelect}
          controls={false}
        >
          {this.faces}
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;
