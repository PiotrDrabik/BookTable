import React, { Component } from 'react';
import img from './resources/wood-bg2.png';
import table from './resources/table.png';
import Top from './components/Top.js';
import './App.css';
import { Button, Row, Col, Container } from 'reactstrap';

class App extends Component {
  
  constructor (props) {

      super(props)
  }

  render() {

    const mainBgStyle = {
        color: 'blue',
        background: `url(${img}) repeat`
    } 
    const tableStyle = {
        color: 'black',
        background: `url(${table}) no-repeat`,
        backgroundSize: 'cover',
        height: '190px',
        width: '200px'
    }
    const buttonPosition = {
      marginTop: '-50%',
      marginLeft: '40%'
    }
    return (
      <div className="App" style={mainBgStyle}>
        <Top/>
        <Button color="danger">Danger!</Button>
         <Container>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
            </Row>
            <Row>
              <Col sm={{ size: 11, offset: 1 }}>.col-sm .col-sm-offset-1</Col>
              <Col sm={{ size: 11, offset: 1 }}>.col-sm .col-sm-offset-1</Col>
              <Col sm={{ size: 'auto', offset: 6 }}>.col-sm .col-sm-offset-6</Col>
            </Row>
         </Container>
         <Container>
            <Row>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
                 <Button color="danger" style={buttonPosition}>Danger!</Button>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
            </Row>
            <Row className="padding-bottom-20">
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
              <Col sm="12" md="3">
                 <div style={tableStyle}></div>
              </Col>
            </Row>
         </Container>
         
      </div>
    );
  }
}

export default App;
