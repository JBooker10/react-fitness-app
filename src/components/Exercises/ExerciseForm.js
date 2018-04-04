import React, { Component } from 'react';
import {Form, Input, Button } from 'reactstrap';
import { Options, OptionsAdv} from '../Http-Library/Iterator';
import * as firebase from 'firebase';
import StarRating from './Rating/StarRating';
import moment from 'moment';


class ExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: props.workout,
      dated: moment().format("YYYY-MM-DD"),
      time: moment().format('hh:mm'),
      weight: 100,
      reps: 1,
      sets: 1,
      uid: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e){
      this.setState({ [e.target.name ]: e.target.value})
    }

    handleSubmit(event){
        firebase.database().ref(`workouts`).push({
          workout: this.state.workout,
          dated: this.state.dated,
          time: this.state.time,
          weight: this.state.weight,
          reps: this.state.reps,
          sets: this.state.sets
        }).then(
      this.props.alert(true, 'info'))
      .catch((e) => (this.props.alert(true, 'danger')))
      setTimeout( () => { this.props.alert(false, 'info')}, 4000)
      event.preventDefault()
      event.stopPropagation()
    }

    render(){
      return (
        <Form onSubmit={this.handleSubmit}>
          <span className="form_group">

           <Input name="dated" type="date"  className="form_input" value={this.state.dated}
            onChange={this.handleChange}/>

           <Input name="time" type="time" className="form_input"
           value={this.state.time}
            onChange={ this.handleChange}
           />
          </span>
          <br/>
          <div className="form_group">
              <Input type="select" name="weight" className="form_input" id="exampleSelect" placeholder="weight"
                  onChange={ this.handleChange} value={this.state.weight}>
                  <option disabled>Weight lbs</option>
                  <OptionsAdv from={5} to={500}/>
              </Input>
              <Input type="select" name="reps" className="form_input" id="exampleSelect" placeholder="reps"
                  onChange={ this.handleChange} value={this.state.reps}>
                  <option disabled>Reps</option>
                  <Options from={1} to={25}/>
              </Input>
              <Input type="select" name="sets" className="form_input" id="exampleSelect" placeholder="sets"
                  onChange={ this.handleChange} value={this.state.sets}>
                  <option disabled>Sets</option>
                  <Options from={1} to={10}/>
              </Input>
          </div>
          <br/>
          <StarRating/>
          <div className="float-right">
          <Button outline color="light" size="" type="submit">Submit</Button>
          </div>
           </Form>
      )
    }
}

export default ExerciseForm;
