import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types'
import Anatomy from './Anatomy/Anatomy';
import Search from './Exercises/Search';
import ExerciseOptions from './Exercises/ExerciseOptions';
import UserSetup from './User/UserSetup';
import User from './User/User';
import Footer from './Footer/Footer';
import NavigationBar from './Navbar/NavigationBar';
import { StickyContainer, Sticky } from 'react-sticky';



class FitnessApp extends Component {
  

  render() {
    return (
      <div>
        <NavigationBar/>
        <Container>
        <UserSetup/>
          <br/><br/>
          <Row>
            <Col md="6">
            <br/>
            <User/>
            <br/><br/><br/>
            <Search filterText={this.props.appData.filterText}
                    userInput={this.props.userInput.bind(this)}/>
            <Row>
              <Col md="12">
                { this.props.appData.filterText !== '' && <ExerciseOptions exercises={this.props.appData.exerciseData}
                               filterText={this.props.appData.filterText}
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

            <Anatomy defaultStyle={this.props.appData.defaultStyle}
                     targetFrontMuscles={this.props.appData.targetFrontMuscles}
                     targetBackMuscles={this.props.appData.targetBackMuscles}
                      />
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
  userInput: PropTypes.func,
  userSelected: PropTypes.func
}

export default FitnessApp;
