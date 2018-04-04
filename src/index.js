import React from 'react';
import ReactDOM from 'react-dom';
import './cyborg-bootstrap.css';
import './index.css';
import AppRouter, { history } from './routes/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { firebase } from './firebase/firebase';
import { Loading } from './components/Loading/Loading';

// export const login = (uid) => (
//   console.log(uid)
// )
// export const logout = () => (
//   console.log(false)
// )

const loggedIn = (uid) => {
  if(uid){
  return !!uid
}
}



let rendered = false;

const renderApp = () => {
  if(!rendered){
    ReactDOM.render(<AppRouter auth={loggedIn}/>, document.getElementById('root'));
    rendered = true;
  }
}

ReactDOM.render(<Loading/>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      //loggedIn(user.uid)
      //console.log('uid', user.uid, "loggedIn");
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/exercise-log');
      }
    } else {
      renderApp();
      history.push(`/`)
    }
});

registerServiceWorker();
