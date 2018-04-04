import React, { Component } from 'react';
import FitnessApp from './FitnessApp';
import database from './../firebase/firebase';


class FitnessAppContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      exerciseData: [],
      filterText: '',
      isHidden: true,
      defaultStyle: {
        fill: 'transparent',
        height: 1000,
        padding: '0 0 1em 0',
        strokeWidth: .75,
        stroke: '#222',
        margin: 'auto',
        display:'flex',
        overflowY: 'hidden !important'
       },
      targetFrontMuscles: [],
      targetBackMuscles: []
    }
  }

  shouldComponentUdate(nextState, nextProps){
    return false
  }
  userSelected(front, back){
    this.setState({targetFrontMuscles: front})
    this.setState({targetBackMuscles: back})
  }
  resetMuscles(node){
    document.querySelectorAll(`.cls-${node}`).forEach(path => {
      path.style.fill = 'transparent'})
  }
  renderMuscles(svgPaths, color, node){
    this.resetMuscles(node)
    svgPaths !== undefined ?
    svgPaths.forEach((path) => {
    const newPath = document.querySelectorAll(`.cls-${node}`)
    newPath[path].style.transform = ""
    newPath[path].style.transition = '450ms'
    newPath[path].style.fill = color } ) : console.warn('empty or non-existent array');
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
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
                    toggleHidden={this.toggleHidden.bind(this)}
                    userInput={this.userInput.bind(this)}
                    renderMuscles={this.renderMuscles.bind(this)}
                    resetMuscles={this.resetMuscles.bind(this)}
                    userSelected={this.userSelected.bind(this)}/>
      </div>
    )
  }
}

export default FitnessAppContainer;
