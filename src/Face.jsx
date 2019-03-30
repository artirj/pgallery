import React, { Component } from "react";
import { Image } from "react-bootstrap";
class Face extends Component {
  render(props) {
    return (
      <div className="Face">
        <Image
          src={process.env.PUBLIC_URL + "/faces/" + this.props.sourceImage}
          roundedCircle
          width="40%"
        />
      </div>
    );
  }
}

export default Face;
