import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDiw12qrH9PuCu60zkMOb61MfvLwAMPODE",
    authDomain: "disney-clone-3b04d.firebaseapp.com",
    projectId: "disney-clone-3b04d",
    storageBucket: "disney-clone-3b04d.appspot.com",
    messagingSenderId: "908653561391",
    appId: "1:908653561391:web:ed21a21f196fa5e353a8da",
    measurementId: "G-0HGD6KLFV4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};

  export default db;

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
