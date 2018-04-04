import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import Moment from 'react-moment'


class ExerciseList extends Component {

  render() {
      const newNames = this.props.exercises.map(exercise => exercise.workout)
      .reduce((amount, exercise) => {
        amount[exercise] = (amount[exercise] || 0) + 1;
        return amount
      },{})
      let total = Object.values(newNames)
      const property = Object.getOwnPropertyNames(newNames)

      const exercises = property.map((value, i) => {

        const link = total[i]
         return (
          <ListGroupItem key={i} className="justify-content-center">{value}<Badge className="float-right" pill color="info">{link}</Badge></ListGroupItem>
        )
      })

    return (
      <ListGroup>
      <ListGroupItem className="text-center" style={{backgroundColor: "#111"}}><Moment format="dddd ll">{this.props.currentDate}</Moment></ListGroupItem>
      {exercises}
      </ListGroup>
    );
  }
}

export default ExerciseList;
