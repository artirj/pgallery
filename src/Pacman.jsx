import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import FaceWithMovement from "./FaceWithMovement";
import ImageGrid from "./ImageGrid";
import "./Gallery.css";
class Pacman extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="Pacman">
        <Container fluid={true}>
          <div className="board" />

          <FaceWithMovement image={data[0].image} />
          <FaceWithMovement image={data[1].image} />
        </Container>
      </div>
    );
  }
}

export default Pacman;
