import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import * as action from './../actions/index';
import 'react-datepicker/dist/react-datepicker.css';
import './Top.css';

class Top extends Component {

    constructor(props) {

        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    handleChange(date) {

        let currentDate = new Date();
        if (moment(currentDate).format("YYYY-MM-DD") > moment(date).format("YYYY-MM-DD")) {
            this.props.setAlert('chosen date is from the past');
        } else {
            this.props.removeAlert();
            this.props.setDate(date);
        }
    }

    setTime(timeItem) {

        this.props.setTime(timeItem);
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
            backgroundColor: '#f0f0f0',
            color: 'black'
        };
        const timeArray = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00', '19:00 - 22:00'];
        const listTimeItems = timeArray.map((timeItem) =>
            <div className="list-group-item cursor-pointer" onClick={() => this.setTime(timeItem)} tag="a" href="#"
                 key={timeItem}>{timeItem}</div>
        );

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col" style={headerStyle}>
                        <div className="app-name-style">book a table</div>
                        <div
                            className="app-logo-style">{this.props.restaurant.name}<br/> {this.props.restaurant.address}
                        </div>
                        <div className="row padding-bottom-20">
                            <div className="col-3">
                                <div className="list-group padding-top-40">
                                    <div className="list-group-item" style={firstRow}>Select time interval</div>
                                    {listTimeItems}
                                </div>

                                <div className="list-group padding-top-15">
                                    <div className="list-group-item" style={firstRow}>Your choice:</div>
                                    <div className="list-group-item">{this.props.restaurant.name}</div>
                                    <div className="list-group-item">
                                        <span>{this.props.bookeddate.bookDate ? moment(this.props.bookeddate.bookDate).format('LL') : 'select date'}</span>
                                    </div>
                                    <div className="list-group-item">
                                        <span>{this.props.bookedtime.bookTime ? this.props.bookedtime.bookTime : 'select time'}</span>
                                    </div>
                                    <div className="list-group-item">select table</div>
                                </div>
                            </div>
                            <div className="col-3 padding-top-40">
                                <DatePicker
                                    inline
                                    dateFormat="YYYY/MM/DD"
                                    selected={this.localBookDate}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="col-3">col3
                            </div>
                            <div className="col-3">col4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {
        setDate: (date) => dispatch(action.setDate(date, moment(date).format())),
        setTime: (time) => dispatch(action.setTime(time)),
        setAlert: (message) => dispatch(action.setAlert(message)),
        removeAlert: () => dispatch(action.removeAlert())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);