import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { setDate, setTime } from './../actions/index';
import 'react-datepicker/dist/react-datepicker.css';
import './Top.css';

class Top extends Component {
  
  constructor (props) {

      super(props)

      this.handleChange = this.handleChange.bind(this);
      this.setTime = this.setTime.bind(this);
  }

  handleChange(date) {

    this.props.setDate(date);
    console.log('this',this);
  }

  setTime(timeItem) {

    this.props.setTime(timeItem);
    console.log('this',this);
  }

  render() {
 
    const headerStyle = {
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: '1px solid black',
      marginTop: '10px',
      marginBottom: '10px',
        margin: '10px'
    };
    const firstRow = {
      backgroundColor: 'lightgrey',
      color: 'black'
    };
    const timeArray = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00', '19:00 - 22:00'];
    const listTimeItems = timeArray.map((timeItem) =>
      <ListGroupItem onClick={ () => this.setTime(timeItem)} tag="a" href="#" key={timeItem}>{timeItem}</ListGroupItem>
    );

  return (
    <Container fluid={true}>
          <Row>
            <Col sm={{ size: 12, offset: 0}} style={headerStyle}>
                <div className="app-name-style">book a table</div>
                <div className="app-logo-style">Restaurant Voyage<br /> Wroclaw, Lotnicza 11</div>
                  <Row className="padding-bottom-20">
                      <Col md={{ size: 3}}>
                        <ListGroup className="padding-top-40">
                          <ListGroupItem style={firstRow}>Select time interval</ListGroupItem>
                          {listTimeItems}
                        </ListGroup>

                        <ListGroup className="padding-top-15">
                          <ListGroupItem style={firstRow}>Your choice:</ListGroupItem>
                          <ListGroupItem>restaurant</ListGroupItem>
                          <ListGroupItem><div>{moment(this.props.bookeddate.bookDate).format('LL')}</div></ListGroupItem>
                          <ListGroupItem><div>{this.props.bookedtime.bookTime ? this.props.bookedtime.bookTime : 'select time'}</div></ListGroupItem>
                          <ListGroupItem>table ??</ListGroupItem>
                        </ListGroup>
                      </Col> 
                      <Col md={{ size: 3}} className="padding-top-40">
                        <DatePicker 
                            inline
                            dateFormat="YYYY/MM/DD"
                            selected={this.localBookDate}
                            onChange={this.handleChange} />
                      </Col>
                      <Col md={{ size: 3}}>col3
                      </Col>
                      <Col md={{ size: 3}}>col4
                      </Col>
                    </Row>
            </Col>
          </Row> 
      </Container>
      )
  }
}

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {
        setDate: (date) => dispatch( setDate(date, moment(date).format() )),
        setTime: (time) => dispatch( setTime(time) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);