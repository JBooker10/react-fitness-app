import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types'
import Anatomy from './Anatomy/Anatomy';
import Search from './Exercises/Search';
import ExerciseOptions from './Exercises/ExerciseOptions';
import Footer from './Footer/Footer';
import NavigationBar from './Navbar/NavigationBar';
import { StickyContainer, Sticky } from 'react-sticky';




class FitnessApp extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Container>
          <br/><br/>
          <Row>
            <Col md="6">
            <br/>
            <Search filterText={this.props.appData.filterText}
                    userInput={this.props.userInput.bind(this)}/>
            <Row>
              <Col md="12">

                { this.props.appData.filterText !== '' && <ExerciseOptions exercises={this.props.appData.exerciseData}
                               filterText={this.props.appData.filterText}
                               renderMuscles={this.props.renderMuscles}
                               targetFrontMuscles={this.props.appData.targetFrontMuscles}
                               targetBackMuscles={this.props.appData.targetBackMuscles}
                               userSelected={this.props.userSelected}/>}

              </Col>
            </Row>
            </Col>
            <Col md="6">
            <StickyContainer>

            <Sticky topOffset={1025}>
            {
            ({isSticky, distanceFromTop, wasSticky, calculateHeight, style}) => {
              return (
            <div  style={{overflowY: "auto"}}>
            <Anatomy isHidden={this.props.appData.isHidden}
                     toggleHidden={this.props.toggleHidden.bind(this)}
                     defaultStyle={this.props.appData.defaultStyle}
                     renderMuscles={this.props.renderMuscles}
                     targetFrontMuscles={this.props.appData.targetFrontMuscles}
                     targetBackMuscles={this.props.appData.targetBackMuscles}
                     resetMuscles={this.props.resetMuscles}/>
            </div>
                )
              }
                   }
            </Sticky>
            </StickyContainer>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>

    );
  }
}

FitnessApp.propTypes = {
  exerciseData: PropTypes.array,
  targetFrontMuscles: PropTypes.array,
  isHidden: PropTypes.bool,
  defaultStyle: PropTypes.object,
  filterText: PropTypes.string,
  toggleHidden: PropTypes.func,
  userInput: PropTypes.func,
  renderMuscles: PropTypes.func,
  userSelected: PropTypes.func
}

export default FitnessApp;
