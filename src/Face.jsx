import React, { Component } from "react";
import { Container, Col, Row, Figure } from "react-bootstrap";
import { prepareText, prepareTwitter } from "./utils";
class Face extends Component {
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
      <div className="Face">
        <Row>
          <Col align="center">
            <Figure>
              <Figure.Image
                src={process.env.PUBLIC_URL + "/faces/" + image + ".png"}
                roundedCircle
                width="50%"
              />
              <Figure.Caption>
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
                    />
                  </p>
                </span>
                <p>{splittedBio[0]}</p>
                <p>{splittedBio[1]}</p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Face;
