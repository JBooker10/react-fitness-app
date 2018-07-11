import React, { Component } from 'react';
import { Table, Col, Row, Container } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import ExerciseList from './ExerciseList';
import NavigationBar from './../Navbar/NavigationBar';
import Footer from './../Footer/Footer';
import * as firebase from 'firebase';

class Edit extends Component {
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

  render() {
      return (
        <div>
        <NavigationBar/>
        <Container>
        <br/><br/><br/>
        <Row>
        <Col md="9">
        <h4>Exercise History</h4>
        <Table size="sm" className="m-3"hover>
          <thead>
            <tr className="text-center">
              <th>Date</th>
              <th>Exercise Name</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Sets</th>
              <th><FontAwesome name="pencil-square-o"/></th>
              <th><FontAwesome name="trash"/></th>
            </tr>
          </thead>
            <ExerciseList exerciseData={this.state.fitnessData}/>
        </Table>
        </Col>
        </Row>
        </Container>
        <Footer/>
        </div>
      );
    }
}

export default Edit;
