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
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    }
  ]
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
    this.startVoteUpdate();
  }
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  startVoteUpdate() {
    database.collection("users").onSnapshot(query => {
      var state = this.state.tableValues;

      query.forEach(doc => {
        state[doc.id] = doc.data();
        this.setState({ tableValues: state });
      });
    });
  }
  plusVote(userId, votes) {
    database
      .collection("users")
      .doc(userId)
      .update({
        votes: votes + 1
      });
  }
  makeTable() {
    const tableBody = Object.keys(this.state.tableValues).map(id => {
      const user = this.state.tableValues[id];
      const buttonDisabled = id === firebase.auth().currentUser.uid;
      return (
        <tr key={id}>
          <td>{user.name}</td>
          <td>{user.project}</td>
          <td>{user.votes}</td>
          <td>
            <Button
              variant="success"
              className={buttonDisabled ? "disabled" : ""}
              onClick={() => {
                if (!buttonDisabled) {
                  this.plusVote(id, user.votes);
                }
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
