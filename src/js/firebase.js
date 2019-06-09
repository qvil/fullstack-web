// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var myFirebase = {
  getData: function() {
    return new Promise(function(resolve, reject) {
      db.collection("data")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            resolve(doc.data());
          });
        })
        .catch(function(error) {
          console.error(error);
          reject(error);
        });
    });
  }
};
