import React, { Component } from 'react';
import ExerciseList from './Exercise-List';
import moment from 'moment';

class ExerciseDate extends Component {
  render(){
    return (

      <div>
      <h5 className='text-center'>Last Seven Days</h5>
      <ExerciseList currentDate={moment().format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
          fitnessdata.dated === moment().format("YYYY-MM-DD"))}/>
      <br/>
      <ExerciseList currentDate={moment().subtract(1, 'days').format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
              fitnessdata.dated === moment().subtract(1, 'days').format("YYYY-MM-DD"))}/>
      <br/>
      <ExerciseList currentDate={moment().subtract(2, 'days').format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
              fitnessdata.dated === moment().subtract(2, 'days').format("YYYY-MM-DD"))}/>
      <br/>
      <ExerciseList currentDate={moment().subtract(3, 'days').format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
              fitnessdata.dated === moment().subtract(3, 'days').format("YYYY-MM-DD"))}/>
      <br/>
      <ExerciseList currentDate={moment().subtract(4, 'days').format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
              fitnessdata.dated === moment().subtract(4, 'days').format("YYYY-MM-DD"))}/>
      <br/>
      <ExerciseList currentDate={moment().subtract(5, 'days').format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
      fitnessdata.dated === moment().subtract(5, 'days').format("YYYY-MM-DD"))}/>
      <br/>
      <ExerciseList currentDate={moment().subtract(6, 'days').format("YYYY-MM-DD")} exercises={this.props.fitnessData.filter(fitnessdata =>
              fitnessdata.dated === moment().subtract(6, 'days').format("YYYY-MM-DD"))}/>
      <br/>
      </div>
      )}
}

export default ExerciseDate;
