document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    const db = firebase.firestore();

    const myPost = db.collection('user').doc('personOne');

    myPost.onSnapshot(doc => {

        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title

    })


});


function updateUser(e) {
    const db = firebase.firestore();
    const myPost = db.collection('user').doc('personOne');
    myPost.update({ name: e.target.value })
}

function updateContact(e) {
    const db = firebase.firestore();
    const myPost = db.collection('user').doc('personOne');
    myPost.update({ contactInfo: e.target.value })
}

function updateTaken(e) {
    const db = firebase.firestore();
    const myPost = db.collection('user').doc('personOne');
    myPost.update({ taken: e.target.value })
}

function updateTaking(e) {
    const db = firebase.firestore();
    const myPost = db.collection('user').doc('personOne');
    myPost.update({ taking: e.target.value })
}

function updateEverything(e1, e2, e3, e4) {
    const db = firebase.firestore();
    const myPost = db.collection('user').doc('personOne');
    myPost.update({ name: e1.target.value })
    myPost.update({ contactInfo: e2.target.value })
    myPost.update({ taken: e3.target.value })
    myPost.update({ taking: e4.target.value })

}