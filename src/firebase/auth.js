// import { firebase, googleAuthProvider } from './firebase';
//
//
// export const startLogin = () => {
//   return () => {
//     return firebase.auth().signInWithPropup(googleAuthProvider);
//   };
// };

export const startLogin = () => {
  return firebase.auth().signOut();
}
