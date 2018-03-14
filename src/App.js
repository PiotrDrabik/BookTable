import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, Container } from 'reactstrap';

import img from './resources/wood-bg2.png';
import table from './resources/table.png';
import Top from './containers/Top.js';
import './styles/App.css';

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
                 <Button color="danger" onClick={ () => console.log(this)} style={buttonPosition}>Danger!</Button>
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

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);