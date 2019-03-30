import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import "./Face.css";
class Face extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  toggleHover = event => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    const { image, name } = this.props;

    return (
      <div className="Face">
        <Figure>
          <Figure.Image
            src={process.env.PUBLIC_URL + "/faces/" + image + ".png"}
            roundedCircle
            width="80%"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          />
          <Figure.Caption>{name}</Figure.Caption>
        </Figure>
      </div>
    );
  }
}

export default Face;
