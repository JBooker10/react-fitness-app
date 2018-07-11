import React, { Component } from 'react';
import FitnessApp from './FitnessApp';
import database from './../firebase/firebase';


class FitnessAppContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      exerciseData: [],
      user: '',
      filterText: '',
      targetFrontMuscles: [],
      targetBackMuscles: []
    }
  }

  userSelected(front, back){
    this.setState({targetFrontMuscles: front})
    this.setState({targetBackMuscles: back})
  }

  userInput(searchExercise) {
    this.setState({filterText: searchExercise})
  }

  componentWillMount(){
    database.ref('data')
    .once('value')
    .then(snapshot => {
      const data = snapshot.val()
      this.setState({exerciseData: data})
    })
    .catch(e => console.log(e))
  }

  render(){
    return (
      <div>
        <FitnessApp appData={this.state}
                    userInput={this.userInput.bind(this)}
                    userSelected={this.userSelected.bind(this)}/>
      </div>
    )
  }
}

export default FitnessAppContainer;
