const db = firebase.firestore();

function writeData() {
    db.collection("user").doc("personOne").set({
        name: "Billy Gates",
        contactInfo: "BillyGates@uw.edu"
    })
    .then(function() {
        console.log("Successfully Documented!");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
  