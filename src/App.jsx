import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import Gallery from "./Gallery";
import Leaderboard from "./Leaderboard";
const data = require("./data.json");
const routes = mount({
  "/": route({
    title: "Pioneer Gallery",
    view: <Gallery data={data} />
  }),
  "/leaderboard": route({
    title: "Leaderboard",
    view: <Leaderboard />
  })
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <Logo
              width="100"
              height="30"
              className="d-inline-block align-top"
            />
            {"/Hall of Fame"}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          </Nav>
        </Navbar>
        <Router routes={routes}>
          <View />
        </Router>
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
