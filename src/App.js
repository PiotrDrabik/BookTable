import React, { Component } from 'react';
import img from './resources/wood-bg.jpg';
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

    return (
      <div className="App" style={mainBgStyle}>
        {/*
        <Row>
          <Col sm={{ size: 10, offset: 1}} style={headerStyle}>
            <div className="appNameStyle">book a table</div>
            <Row>
              <Col sm={{ size: 4}}>
                <div>{moment(this.state.startDate).format('LL')}</div>
              </Col>
              <Col sm={{ size: 4}}>
                <DatePicker 
                    inline
                    dateFormat="YYYY/MM/DD"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
              </Col>
              <Col sm={{ size: 4}}>
              </Col>
            </Row>
          </Col>
        </Row>*/}
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
      </div>
    );
  }
}

export default App;
