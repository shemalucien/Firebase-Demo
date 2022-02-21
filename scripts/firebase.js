// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
  apiKey: "....", // add your api key
  authDomain: "...", // add your authDomain
  projectId: "...", // project id
  storageBucket: "...", // storage bucket payload
  messagingSenderId: "...", // your app sender id,
  appId: "..." // your firebase app id
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //make aut and firestore references
  // enable firebase auth service
  const auth = firebase.auth();
  // enable firebase firestore service
  const db  = firebase.firestore();
//   db.settings({timeStampInShots: true});