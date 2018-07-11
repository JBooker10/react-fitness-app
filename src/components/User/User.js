import React, { Component } from 'react';
import { Card } from 'reactstrap';
import placeholder from './img/profile-placeholder.svg'
import { firebase, googleAuthProvider } from './../../firebase/firebase';
import googlelogo from './../Introduction/img/Google__G__Logo.svg';
import Gravatar from 'react-gravatar';


class User extends Component {
    constructor(){
        super()
        this.state = {
            user: '',
        }
    }

    componentWillMount(){
        let user = firebase.auth().currentUser;
        if(user) {
            this.setState({user: user})
            }
    }

    startLogin(){
        return firebase.auth().signInWithRedirect(googleAuthProvider)
    }

    render(){

        const { displayName, photoURL, isAnonymous, email } = this.state.user

        let isAuthenticated


        isAnonymous ? 
            isAuthenticated  =  <Card outline body color="dark" className="card p-4 m-4" inverse>
            <img src={placeholder} alt="" className="rounded-circle d-block mx-auto border border-light" height="110" width="110"/>
           <div className="text-center">
           <button type="button" className="btn  btn-outline-light m-2 rounded" onClick={ this.startLogin }><img src={googlelogo} alt="" height="22"/>&nbsp;&nbsp;Signup with Google</button>
           <div className="d-flex justify-content-around">
           <small>Your user profile is incomplete! To signup, please login with your Gmail account.</small>
           </div>
           </div>
           </Card>
        :
            isAuthenticated  =  <Card outline body color="dark" className="card p-4 m-4" inverse>
            <Gravatar email={email} size={110} rating="pg" default={photoURL} className="rounded-circle d-block mx-auto" />
           <div className="text-center">
           <h5>{ displayName }</h5>
           <div className="d-flex justify-content-around">
           </div>
           </div>
           </Card>

        return (
            isAuthenticated
        )
    }
}

export default User;