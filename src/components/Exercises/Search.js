import React, { Component } from 'react';
import './Exercises.css';
import { FormText, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Fade from 'react-reveal/Fade';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      changeColor : "#ccc",
      size : "2x"
    }
    this.alterColor = this.alterColor.bind(this)
    this.resetColor = this.resetColor.bind(this)
  }


  handleChange(e) {
    this.props.userInput(e.target.value)
  }

  alterColor(e){
  this.setState({changeColor : "#2A9FD6"})
  this.setState({size : "3x"})
  }

  resetColor(e){
    this.setState({changeColor : "#ccc"})
    this.setState({size : "2x"})
  }


  render() {
    return (
      <Fade>
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><FontAwesome name="search" size={this.state.size}
              style={{ display: "flex", alignSelf:"center", transition:"500ms", color: this.state.changeColor }}
          /></InputGroupAddon>
         <Input type="text" bssize="lg"
          onChange={this.handleChange.bind(this)}
          value={this.props.filterText}
          onFocus={this.alterColor}
          onBlur={this.resetColor}
          className="searchbar" placeholder="Search Exercises..." />
         </InputGroup>
         <FormText color="muted" className="text-center">
            <strong>Search examples:</strong> barbell row, military press, bench press, lateral pulldowns, bicep curls, etc...
          </FormText>
         <br/>
      </div>
    </Fade>
    )
  }
}

export default Search;
