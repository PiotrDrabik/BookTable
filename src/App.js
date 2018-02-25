import React, { Component } from 'react';
import img from './resources/wood-bg.jpg';
import './App.css';
import { Button, Row, Col } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  
  constructor (props) {
      super(props)
      this.state = {
        startDate: moment()
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const mainBgStyle = {
        color: 'blue',
        background: `url(${img}) repeat`
    } 
    const headerStyle = {
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: '1px solid black',
      height: '250px',
      marginTop: '10px',
      marginBottom: '10px'
    }
    const appNameStyle = {
      position: 'absolute',
      left: '-3px',
      top: '-3px',
      backgroundColor: 'black',
      color: 'white',
      padding: '1%',
      borderRadius: '6px 6px 6px 6px'
    }
    console.log(moment(this.state.startDate).format('LL'));
    return (
      <div className="App" style={mainBgStyle}>
        <Row>
          <Col sm={{ size: 10, offset: 1}} style={headerStyle}>
            <div style={appNameStyle}>book a table</div>
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
                    className=""
                />
              </Col>
              <Col sm={{ size: 4}}>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button color="danger">Danger!</Button>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 11, offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 11, offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 6 }}>.col-sm .col-sm-offset-6</Col>
        </Row>
      </div>
    );
  }
}

export default App;
