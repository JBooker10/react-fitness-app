import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Anatomy.css';
import FrontAnatomy from './FrontAnatomy';
import BackAnatomy from './BackAnatomy';
import FontAwesome from 'react-fontawesome';
import Fade from 'react-reveal/Fade';


class Anatomy extends Component {



  render() {
    return (
      <Fade>
      <div className="anatomy">
      <FontAwesome name="refresh" size="2x" className="button" onClick={this.props.toggleHidden}/>
      { this.props.isHidden && <FrontAnatomy
                                             defaultStyle={this.props.defaultStyle}
                                             renderMuscles={this.props.renderMuscles}
                                             targetFrontMuscles={this.props.targetFrontMuscles}
                                             resetMuscles={this.props.resetMuscles}/> }
      { !this.props.isHidden && <BackAnatomy  defaultStyle={this.props.defaultStyle}
                                             renderMuscles={this.props.renderMuscles}
                                             targetBackMuscles={this.props.targetBackMuscles}/> }
      </div>
    </Fade>
    )
  }
}

Anatomy.propTypes = {
  isHidden: PropTypes.bool,
  toggleHidden: PropTypes.func,
  defaultStyle: PropTypes.object
}

export default Anatomy;
