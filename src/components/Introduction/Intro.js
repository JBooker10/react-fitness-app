import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import logo from './jb-logo.svg';
import Fade from 'react-reveal/Fade';
import './intro.css';
import Footer from './../Footer/Footer';
import { firebase, googleAuthProvider } from './../../firebase/firebase';




class Intro extends Component {

  startLogin(){
      return firebase.auth().signInWithPopup(googleAuthProvider);
  }

  render() {
    return (
      <div>
      <Row className="justify-content-center text-center" style={{height: "100vh"}}>
        <Col md="4" className=" align-self-center">
          <Fade>
          <img src={logo} className="logo" alt="" height="215" style={{display:"block", margin: "auto", padding: "3px"}} />

          <h4 className="text-muted">React Fitness</h4>
          </Fade>
        <br/>
          <div className="d-inline-flex">
          <Button outline color="light" onClick={ this.startLogin }><FontAwesome className="google" name="google"/>&nbsp;&nbsp;Login with Google</Button>
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
