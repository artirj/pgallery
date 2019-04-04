import React, { Component } from "react";

import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Gallery.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
var config = {
  apiKey: "AIzaSyBANQhqnfCX4W5_vBoWxGTtz764vg8WlAo",
  authDomain: "pioneer-236020.firebaseapp.com",
  databaseURL: "https://pioneer-236020.firebaseio.com",
  projectId: "pioneer-236020",
  storageBucket: "pioneer-236020.appspot.com",
  messagingSenderId: "647502346205"
};
firebase.initializeApp(config);
var database = firebase.firestore();
//https://github.com/firebase/firebaseui-web-react
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.

  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
};

class Leaderboard extends Component {
  state = {
    isSignedIn: false,
    tableValues: new Map()
  };
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  getTableData() {
    database
      .collection("users")
      .get()
      .then(query => {
        query.forEach(doc => {
          var newState = this.state.tableValues;
          var data = doc.data();

          newState[doc.id] = data;
          this.setState({
            tableValues: newState
          });
        });
      });
  }
  plusVote(userId, votes) {
    console.log(`We are going to increase ${votes}`);
    database
      .collection("users")
      .doc(userId)
      .update({
        votes: votes + 1
      })
      .then(() => {
        //Find matching id
        var state = this.state.tableValues;
        state[userId]["votes"] = votes + 1;
        this.setState({ tableValues: state });
      });
  }
  makeTable() {
    const tableBody = Object.keys(this.state.tableValues).map(id => {
      const user = this.state.tableValues[id];
      return (
        <tr key={id}>
          <td>{user.name}</td>
          <td>{user.project}</td>
          <td>{user.votes}</td>
          <td>
            <Button
              variant="success"
              onClick={() => {
                this.plusVote(id, user.votes);
              }}
            >
              Vote
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Project</th>
            <th>Votes</th>
            <th>Vote!</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </Table>
    );
  }
  getContent() {
    var user = firebase.auth().currentUser;

    if (!this.state.isSignedIn) {
      this.getTableData();
      return (
        <Row>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Row>
      );
    } else {
      return (
        <div>
          <Row>
            <Col>
              Welcome {user.displayName}({user.uid})!
            </Col>
            <Col>
              <Button
                variant="primary"
                onClick={() => firebase.auth().signOut()}
              >
                Sign out
              </Button>
            </Col>
          </Row>
          <Row>{this.makeTable()}</Row>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Leaderboard">
        <Container fluid={false}>{this.getContent()}</Container>
      </div>
    );
  }
}

export default Leaderboard;
