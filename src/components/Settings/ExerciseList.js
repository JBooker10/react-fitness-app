import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Moment from 'react-moment';
import {http} from '../Http-Library/AsyncHTTP';
import * as firebase from 'firebase';


class ExerciseList extends Component {
  constructor(props){
    super(props)
    this.state = {
      fitnessData : []
    }
  }


  handleDelete(d){
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`workouts/${uid}/${d.id}`)
      .remove()
      .then(() => console.log(`data was removed`))
      .catch((e) => console.log(e))
  }

  handleUpdate(d){
    http.put(`http://localhost:3004/data/`)
  }

  render(){
    return (
      <tbody>
      {
        this.props.exerciseData.map((exercise, i) =>
          <tr key={i} className="text-center">
          <th scope="row"><Moment format="ll">{exercise.dated}</Moment></th>
          <td>{exercise.workout}</td>
          <td>{exercise.weight}</td>
          <td>{exercise.reps}</td>
          <td>{exercise.sets}</td>
          <td><Button size="sm" color="primary" onClick={() => this.handleUpdate(exercise)}>update</Button></td>
          <td><form onSubmit={() => this.handleDelete(exercise)}><Button size="sm" type="submit" outline color="secondary">remove</Button></form></td>
          </tr>
        )
      }
      </tbody>
    )
  }
}

export default ExerciseList;
