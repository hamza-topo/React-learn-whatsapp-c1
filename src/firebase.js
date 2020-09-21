import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdoliUJgtJBAWloUoasI9wEoGJHXg45tw",
  authDomain: "whatsapp-63b77.firebaseapp.com",
  databaseURL: "https://whatsapp-63b77.firebaseio.com",
  projectId: "whatsapp-63b77",
  storageBucket: "whatsapp-63b77.appspot.com",
  messagingSenderId: "804139672371",
  appId: "1:804139672371:web:4f272d3374700134d5d446",
  measurementId: "G-D3N8WBFDGZ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth().GoogleAuthProvider;

  export {auth,provider};
  export default db;