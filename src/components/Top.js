import React, { Component } from 'react';
import './Top.css';
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Top extends Component {
  
  constructor (props) {

      super(props)
      this.state = {
        bookDate: moment(),
        bookTime: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.setTime = this.setTime.bind(this);
  }

  handleChange(date) {

    this.setState({
      bookDate: date
    });
  }

  setTime(timeItem) {

    console.log('was clicked', timeItem);
    this.setState({
      bookTime: timeItem
    })
  }

  render() {
 
    const headerStyle = {
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: '1px solid black',
      marginTop: '10px',
      marginBottom: '10px'
    }
    const firstRow = {
      backgroundColor: 'lightgrey',
      color: 'black'
    }
    const timeArray = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00', '19:00 - 22:00'];
    const listTimeItems = timeArray.map((timeItem) =>
      <ListGroupItem onClick={ () => this.setTime(timeItem)} tag="a" href="#" key={timeItem}>{timeItem}</ListGroupItem>
    );
    console.log(moment(this.state.bookDate).format('LL'));
    
  return (
    <Container>
          <Row>
            <Col sm={{ size: 12, offset: 0}} style={headerStyle}>
                <div className="appNameStyle">book a table</div>
                <div className="appLogoStyle">Restaurant Voyage<br /> Wroclaw, Lotncza 11</div>
                  <Row className="padding-bottom-20">
                      <Col md={{ size: 3}}>
                        <ListGroup className="padding-top-40">
                          <ListGroupItem style={firstRow}>Select time interval</ListGroupItem>
                          {listTimeItems}
                        </ListGroup>

                        <ListGroup className="padding-top-15">
                          <ListGroupItem style={firstRow}>Your choice:</ListGroupItem>
                          <ListGroupItem>restaurant</ListGroupItem>
                          <ListGroupItem><div>{moment(this.state.bookDate).format('LL')}</div></ListGroupItem>
                          <ListGroupItem><div>{this.state.bookTime ? this.state.bookTime : 'select time'}</div></ListGroupItem>
                          <ListGroupItem>table ??</ListGroupItem>
                        </ListGroup>
                      </Col> 
                      <Col md={{ size: 3}} className="padding-top-40">
                        <DatePicker 
                            inline
                            dateFormat="YYYY/MM/DD"
                            selected={this.state.bookDate}
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

export default Top;