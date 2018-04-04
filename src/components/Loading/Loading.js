import React from 'react';
import loader from './loading.gif';
import { Row, Col } from 'reactstrap';

export const Loading = () => {
  return (
    <Row className="justify-content-center text-center" style={{height: "100vh"}}>
      <Col md="4" className=" align-self-center">
        <img src={loader}  alt="" height="50" style={{display:"block", margin: "auto", padding: "3px"}} />
        <p>Loading...</p>
        <br/><br/>
      </Col>
      </Row>
  )
}
