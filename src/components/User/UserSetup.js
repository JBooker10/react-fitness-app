import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { firebase } from './../../firebase/firebase';


class UserSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: true,
          user: '',
        };

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    componentWillMount(){
        let user = firebase.auth().currentUser;
        if(user) {
            this.setState({user: user})
            }
        if(user.isAnonymous){
              this.setState({modal: false})
          } 
    }


 render(){
    let name
    const { isAnonymous, displayName } = this.state.user

    if(displayName){
     name = displayName.split(' ')[0];
    } else {
     name = 'Anonymous'
    }


     return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>User Setup</ModalHeader>
        <ModalBody>
        <h5 className="text-center">Welcome {name}!</h5>
        <p className="modal-text text-center"><br/>In order to get the full fitness experience, Lets get started setting up your profile.</p>
      <div className="form-row mb-2">
        <div className="col">
        <label htmlFor="age">DOB:</label>
          <input type="date" className="form-control"/>
        </div>
        <div className="col">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" className="form-control">
        <option>Male</option>
        <option>Female</option>
        </select>
        </div>
      </div>
      <div className="form-row mb-2">
        <div className="col">
          <label htmlFor="weight">Weight (.lbs):</label>
          <input type="number" className="form-control" placeholder="185"/>
        </div>
        <div className="col">
        <label htmlFor="height">Height (inches):</label>
          <input type="number" className="form-control" placeholder="72"/>
        </div>
      </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
     )
 }
}


export default UserSetup;