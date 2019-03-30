import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./Face.css";
class Face extends Component {
  handleClick = () => {
    if (this.props.clickHandler !== undefined) {
      this.props.clickHandler(this.props.idx);
    }
  };
  render() {
    const { image, name } = this.props;

    return (
      <div className="Face" onClick={this.handleClick}>
        <Figure>
          <Figure.Image
            src={process.env.PUBLIC_URL + "/faces/" + image + ".png"}
            roundedCircle
            width="128px"
          />
          <Figure.Caption>{name}</Figure.Caption>
        </Figure>
      </div>
    );
  }
}

export default Face;
