import React,{ Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import Moment from 'react-moment';

class ExerciseLog extends Component {

  render(){
    let fitness = this.props.fitnessData.map( (fitnessdata, i) =>
            <tr key={i}>
            <td><Moment format="LL">{fitnessdata.dated}</Moment></td>
            <td><Moment fromNow>{fitnessdata.dated}</Moment></td>
            <td>{fitnessdata.workout}</td>
            <td>{fitnessdata.weight}</td>
            <td>{fitnessdata.reps}</td>
            <td>{fitnessdata.sets}</td>
            </tr>
          )

    return (
      <tbody>
      {fitness}
      </tbody>
    )
  }
}

export default ExerciseLog
