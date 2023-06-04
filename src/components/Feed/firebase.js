//import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import _default from 'react-redux/es/components/connect';
const firebaseConfig = {
    apiKey: "AIzaSyDlQiCHER10HhLJ7QEyoOVi2o7_Cowb3io",
    authDomain: "linkedin-4c866.firebaseapp.com",
    projectId: "linkedin-4c866",
    storageBucket: "linkedin-4c866.appspot.com",
    messagingSenderId: "1052644731079",
    appId: "1:1052644731079:web:cfee68bd9d16d5396ab6e2"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};

