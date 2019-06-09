// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function getData() {
  return new Promise(function(resolve, reject) {
    db.collection("data")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          resolve(JSON.stringify(doc.data()));
        });
      })
      .catch(function(error) {
        console.error(error);
        reject(error);
      });
  });
}

getData().then(res => console.log(res));
