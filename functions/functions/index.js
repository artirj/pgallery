const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.userCreation = functions.auth.user().onCreate(user => {
  // Authentication / user information is automatically added to the request.
  const uid = user.uid;
  var db = admin.firestore();

  return admin
    .auth()
    .getUser(uid)
    .then(userRecord => {
      return userRecord.displayName;
    })
    .catch(error => console.log("Error", error))
    .then(name => {
      db.collection("users")
        .doc(uid)
        .set({
          name: name,
          votes: 0,
          project: "Default project"
        });
      return true;
    })
    .catch(error => console.log("Error", error));
});
