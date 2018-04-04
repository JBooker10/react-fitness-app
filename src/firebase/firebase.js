import * as firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyBLX60pAFeHBTcDQwmEN0nUNxhvSckjo5s",
  authDomain: "react-fitness-b77f0.firebaseapp.com",
  databaseURL: "https://react-fitness-b77f0.firebaseio.com",
  projectId: "react-fitness-b77f0",
  storageBucket: "react-fitness-b77f0.appspot.com",
  messagingSenderId: "738481639918"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default}
