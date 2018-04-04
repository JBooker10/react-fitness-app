import React, { Component } from 'react';
import {Button, Card, CardTitle, CardBody, Form } from 'reactstrap';
import './intro.css';

class SignUp extends Component {
  render(){
    return (
    <Card body outline color="dark">
      <CardTitle></CardTitle>
      <CardBody>
      <Form>
      <div className="form-row">
        <div className="col">
        <input type="text" className="form-control form_color" placeholder="Name"/>
        </div>
        <div className="col">
        <input type="email" className="form-control form_color" placeholder="Email"/>
        </div>
      </div>
      <br/>
      <div className="form-row">
        <div className="col">
        <input type="text" className="form-control form_color" placeholder="Age"/>
        </div>
        <div className="col">
        <input type="email" className="form-control form_color" placeholder="Height"/>
        </div>
        <div className="col">
        <input type="email" className="form-control form_color" placeholder="Weight"/>
        </div>
      </div>
          <br/>
          <Button className="float-right" color="primary">Submit</Button>
        </Form>
        </CardBody>
      </Card>
    )
  }
}

export default SignUp;
