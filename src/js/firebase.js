// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
const collectionName = "data";

var myFirebase = {
  getData: function() {
    return new Promise((resolve, reject) => {
      let result = [];
      db.collection(collectionName)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            result.push(doc.data());
          });
          resolve(result);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  },
  setData: ({ docName, apt, dong, ho, requirement }) => {
    // Add a new document in collection "cities"
    db.collection(collectionName)
      .doc(docName)
      .set({
        apt,
        dong,
        ho,
        requirement
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }
};
