import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";
import { Navbar } from "react-bootstrap";
import Gallery from "./Gallery";
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
        <Gallery />
      </div>
    );
  }
}

export default App;
