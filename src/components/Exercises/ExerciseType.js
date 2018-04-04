import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardFooter, ButtonGroup, Collapse, Alert } from 'reactstrap';
import ExerciseForm from './ExerciseForm';
import FontAwesome from 'react-fontawesome';
import Fade from 'react-reveal/Fade';

class ExerciseType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      visibility:false,
      color: 'info'
    };
    this.toggle = this.toggle.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.alert = this.alert.bind(this);
  }

  alert(bool, color, e){
    this.setState({visibility: bool})
    this.setState({color: color})
  }

  onDismiss(){
    this.setState({visible:false})
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
  return (
    <div>
      <Fade bottom>
      <Card outline body color="dark" className="card p-4" inverse>
      <Alert color={this.state.color} isOpen={this.state.visibility} toggle={this.onDismiss}>
        The {this.props.name.toLowerCase()} exercise has been added to your workout.
        </Alert>
          <CardTitle className="title">{this.props.name}<FontAwesome name="info" style={{float:"right"}}/></CardTitle>

          <CardText className="text-muted">{this.props.desc}</CardText>
          <div className="clearfix">
          <ButtonGroup className="float-right">
          <Button color="primary" onClick={ () => {this.toggle()} }>Log Workout</Button>
          <Button color="primary" onClick={() => {this.props.userSelected(this.props.frontMuscles, this.props.backMuscles)} }>View Muscles</Button>
          </ButtonGroup>
          </div>
          <CardFooter>
            <Collapse isOpen={this.state.collapse}>
            <br/>
              <ExerciseForm workout={this.props.name}
                            alert={this.alert}/>
            </Collapse>
          </CardFooter>
        </Card>
        <br/>
        </Fade>
    </div>
  );
}
};

export default ExerciseType;
