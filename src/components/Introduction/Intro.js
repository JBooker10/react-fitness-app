import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import logo from './jb-logo.svg';
import Fade from 'react-reveal/Fade';
import googleLogo from './img/Google__G__Logo.svg';
import './intro.css';
import Footer from './../Footer/Footer';
import { firebase, googleAuthProvider } from './../../firebase/firebase';




class Intro extends Component {

  startLogin(){
      return firebase.auth().signInWithRedirect(googleAuthProvider)
  }

  viewApp(){
    return firebase.auth().signInAnonymously()
  }

  render() {
    return (
      <div>
      <Row className="justify-content-center text-center" style={{height: "100vh"}}>
        <Col md="4" className=" align-self-center">
          <Fade>
          <img src={logo} className="logo" alt="" height="215" style={{display:"block", margin: "auto", padding: "3px"}} />
          </Fade>
        <br/>
          <div className="">
    
          <Button outline color="light" className="rounded m-2" onClick={ this.startLogin }><img src={googleLogo} height="25" alt="" />&nbsp;&nbsp;Login with Google</Button>
        
          <Button  outline color="light" className="rounded2 m-2" onClick={this.viewApp}>Continue as Guest</Button>
        
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md="12" className="align-self-baseline  footer">
          <Footer/>
        </Col>
      </Row>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: () => dispatch(startLogin())
// });

export default Intro;
