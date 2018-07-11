import React, { Component } from 'react';
import './Anatomy.css';
import FrontAnatomy from './FrontAnatomy';
import BackAnatomy from './BackAnatomy';
import FontAwesome from 'react-fontawesome';
import Fade from 'react-reveal/Fade';


class Anatomy extends Component {
  constructor() {
    super()
    this.state = {
      isHidden: true,
      defaultStyle: {
        fill: 'transparent',
        height: 985,
        padding: '0 0 1em 0',
        strokeWidth: .75,
        stroke: 'rgba(255,255,255,.4)',
        margin: 'auto',
        display:'flex',
        overflowY: 'hidden !important'
       }
    }
    this.toggleHidden = this.toggleHidden.bind(this)
    this.resetMuscles = this.resetMuscles.bind(this)
    this.renderMuscles = this.renderMuscles.bind(this)
  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
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

  render() {
    return (
      <Fade>
      <div className="anatomy">
      <FontAwesome name="refresh" size="2x" className="button" onClick={this.toggleHidden}/>
      { this.state.isHidden && <FrontAnatomy
                                             defaultStyle={this.state.defaultStyle}
                                             renderMuscles={this.renderMuscles}
                                             targetFrontMuscles={this.props.targetFrontMuscles}
                                             resetMuscles={this.resetMuscles}
                                             /> }
      { !this.state.isHidden && <BackAnatomy defaultStyle={this.state.defaultStyle}
                                             renderMuscles={this.renderMuscles}
                                             targetBackMuscles={this.props.targetBackMuscles}/> }
      </div>
    </Fade>
    )
  }
}


export default Anatomy;
