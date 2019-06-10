// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var myFirebase = {
  getData: function() {
    return new Promise((resolve, reject) => {
      db.collection("data")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            resolve(doc.data());
          });
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }
};
