document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    const db = firebase.firestore();

    var myPost = db.collection('user').doc();

    myPost.onSnapshot(doc => {

        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title

    })


});


function updateUser(e) {
    const db = firebase.firestore();
    var myPost = db.collection('user').doc();
    myPost.set({ name: e.target.value })
}

function updateContact(e) {
    const db = firebase.firestore();
    var myPost = db.collection('user').doc();
    myPost.set({ contactInfo: e.target.value })
}

function updateTaken(e) {
    const db = firebase.firestore();
    var myPost = db.collection('user').doc();
    myPost.set{ taken: e.target.value })
}

function updateTaking(e) {
    const db = firebase.firestore();
    var myPost = db.collection('user').doc();
    myPost.set({ taking: e.target.value })
}

function updateEverything(e1, e2, e3, e4) {
    const db = firebase.firestore();
    var myPost = db.collection('user').doc();
    myPost.set({ name: e1.target.value })
    myPost.set({ contactInfo: e2.target.value })
    myPost.set({ taken: e3.target.value })
    myPost.set({ taking: e4.target.value })

}
//
//function writeData() {
//    console.log("You clicked the button!")
//    const db = firebase.firestore();
//    var myPost = db.collection('user').doc();
//    myPost.set({
//        name: "Matthew Karyadi"})
//    .then (function() {
//        console.log("Works");
//    })
//    .catch (function(error) {
//        console.error("error: ", error);
//    });
//}