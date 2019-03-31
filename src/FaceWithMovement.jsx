import React, { Component } from "react";

import "./Face.css";
import Face from "./Face";
class FaceWithMovement extends Component {
  render() {
    const { image, name } = this.props;

    return (
      <div className="FaceWithMovement">
        <Face image={image} name={name} />
      </div>
    );
  }
}

export default FaceWithMovement;
