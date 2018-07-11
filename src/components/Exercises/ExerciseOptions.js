import React, { Component } from 'react';
import ExerciseType from './ExerciseType';


class ExerciseOptions extends Component {
  render() {
    let filteredExercises = this.props.exercises.filter( exercise =>
      exercise.exercise_name.match(new RegExp(this.props.filterText, 'gi')));
    return (
      <div>
      {

        (this.props.exercises.length > 0) ?
          filteredExercises.map(
            (exercise, i) =>  <ExerciseType key={exercise._id}
                                      name={exercise.exercise_name}
                                      desc={exercise.description}
                                      userSelected={this.props.userSelected}
                                      targetFrontMuscles={this.props.targetFrontMuscles}
                                      targetBackMuscles={this.props.targetBackMuscles}
                                      frontMuscles={exercise.front_muscles}
                                      backMuscles={exercise.back_muscles}
                                      />
          ) :
          console.log('Loading...')
      }
      </div>
    )
  }
}

export default ExerciseOptions;
