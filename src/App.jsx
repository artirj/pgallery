import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";
import { Navbar } from "react-bootstrap";
import Gallery from "./Gallery";
const data = require("./data.json");
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Logo
              width="100"
              height="30"
              className="d-inline-block align-top"
            />
            {"/Hall of Fame"}
          </Navbar.Brand>
        </Navbar>
        <Gallery data={data} />
        <Navbar bg="dark" variant="dark" id="footer">
          <Navbar.Brand href="#home">
            {"© 2019 The Pioneer Hall of Fame or something"}
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default App;
