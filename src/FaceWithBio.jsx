import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import { prepareText, prepareTwitter } from "./utils";
import Face from "./Face";
class FaceWithBio extends Component {
  render() {
    const {
      image,
      bio,
      age,
      name,
      twitter,
      coflag,
      co
    } = this.props.sourceData;
    const splittedBio = prepareText(bio);
    return (
      <div className="FaceWithBio">
        <Face image={image} />

        <Figure.Caption align="center">
          <p>
            {name} <b>{prepareTwitter(twitter)}</b>
          </p>
          <p>Age: {age}</p>
          <span>
            <p>
              {co}
              <img
                src={`https://www.countryflags.io/${coflag}/flat/24.png`}
                alt={co}
                style={{ marginLeft: "10px" }}
              />
            </p>
          </span>
          <p>{splittedBio[0]}</p>
          <p>{splittedBio[1]}</p>
        </Figure.Caption>
      </div>
    );
  }
}

export default FaceWithBio;
