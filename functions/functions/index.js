const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const db = admin.firestore();
exports.userCreation = functions.auth.user().onCreate(user => {
  // Authentication / user information is automatically added to the request.
  const uid = user.uid;

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
          project: "Default project",
          votesRemaining: 10
        });
      return true;
    })
    .catch(error => console.log("Error", error));
});
exports.vote = functions.https.onCall((data, context) => {
  //We are updating this votecount
  const userId = data.userId;
  const uid = context.auth.uid;
  // They can't be the same
  if (userId === uid) {
    console.log("Can't vote yourself via the API!");
    return false;
  } else {
    //Check current vote count for the user
    const docRef = db.collection("users").doc(uid);
    const toUpdateRef = db.collection("users").doc(userId);
    return db
      .runTransaction(t => {
        //Get ref to votesRemaining
        return t.get(docRef).then(doc => {
          const val = doc.data().votesRemaining;
          if (val > 0) {
            t.update(docRef, { votesRemaining: (val || 10) - 1 });
            return true;
          } else {
            return false;
          }
        });
      })
      .then(success => {
        if (success) {
          return db.runTransaction(t => {
            //Get ref to votesRemaining
            // eslint-disable-next-line promise/no-nesting
            return t.get(toUpdateRef).then(doc => {
              const val = doc.data().votes;

              t.update(toUpdateRef, { votes: val + 1 });
              return true;
            });
          });
        } else {
          return false;
        }
      });
  }
});
