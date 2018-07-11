import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ExerciseDate from './Exercise-Date';
import Footer from '../Footer/Footer';
import NavigationBar from './../Navbar/NavigationBar';
import BarChart from './BarChart';
import Fade from 'react-reveal/Fade';
import { firebase } from './../../firebase/firebase'


class ExerciseAnalytics extends Component {
  constructor(props){
    super(props)
    this.state = {
      fitnessData : []
    }
  }

componentWillMount(){
  let uid = firebase.auth().currentUser.uid;
  firebase.database().ref(`workouts/${uid}`)
    .once('value')
    .then(snapshot => {
      const data = [];
    snapshot.forEach(childSnapshot => {
      data.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    })
    this.setState({fitnessData : data})
  });
}


render(){
  return (
    <Fade>
    <div>
    <NavigationBar/>
    <Container>
    <br/><br/>
    <Row>
      <h3>Analytics</h3>
    </Row>
    <Row>
    <Col md="8">
    <BarChart fitnessData={this.state.fitnessData}/>
    <br/>
    <Row>
    <Col md="12">
    <h5>Upper Body</h5>
    </Col>
    </Row>
    </Col>
    <Col md="4">
    <ExerciseDate fitnessData={this.state.fitnessData}/>
    <br/>
    </Col>
    </Row>
    </Container>
    <Footer/>
    </div>
    </Fade>
    )
  }
}

export default ExerciseAnalytics;
