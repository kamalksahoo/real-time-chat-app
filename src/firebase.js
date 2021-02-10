import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD7FCeNyKgDzHDP-sHh9MgymMy0ZlQC3K0",
  authDomain: "chatapp-75d03.firebaseapp.com",
  projectId: "chatapp-75d03",
  storageBucket: "chatapp-75d03.appspot.com",
  messagingSenderId: "905104711381",
  appId: "1:905104711381:web:c3d8ebbf1f4a09448ecc5c",
  measurementId: "G-CTM8273E8P"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const database=firebaseApp.firestore();
  export default database;
