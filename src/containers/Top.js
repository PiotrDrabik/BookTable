import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import * as action from './../actions/index';
import 'react-datepicker/dist/react-datepicker.css';
import './Top.css';
import Contact from './Contact.js';
import TopResult from './../components/top-result'
import * as HTTP from './../serviceHttp';

class Top extends Component {

    constructor(props) {

        super(props)

        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    saveReservation() {

        let validationResult = this.validate();
        if (!validationResult) {
            this.props.setAlert('fill all mandatory fields');
            return false;
        }
        let dataToSave = {
            'time': this.props.bookedTime.bookTime,
            'date': moment(this.props.bookedDate.rawBookDate).format("YYYY-MM-DD HH:mm:ss"),
            'table': this.props.tables.selectedTable,
            'contact': {
                'name': this.props.contact.name,
                'email': this.props.contact.email,
                'comment': this.props.contact.comment,
            }
        };
        console.log('props ', this.props);
        return HTTP.POST(dataToSave).then( (response) => {
            console.log(response);
            console.log(' checking table variable: ', response.data.table);
            console.log(' checking time variable: ', response.data.time);
            console.log(' checking date variable: ', response.data.date);
            console.log(' checking contact.name variable: ', response.data.contact.name);
        });
    }

    validate() {

        if (!this.props.bookedDate.bookDate || !this.props.bookedTime.bookTime ||
            !this.props.contact.comment || !this.props.contact.name ||
            !this.props.contact.email || !this.props.tables.selectedTable) {
                return false;
        } else {
                return true;
        }
    }

    handleChangeDate(newDate) {

        this.compareCurrentDate(newDate);
        this.props.setTime('');
    }

    setTime(timeItem) {

        let startHour = timeItem.substring(0, 2);
        let checkedTime = this.compareCurrentTime(startHour);
        if (checkedTime) {
            this.props.setTime(timeItem);
        }
    }

    compareCurrentTime(startHour) {

        let currentTime = new Date();

        let checkedDate = this.compareCurrentDate(this.props.bookedDate.bookDate);
        if (checkedDate.today) {
            if (moment(currentTime).format("HH") > startHour) {
                this.props.setAlert('chosen time interval is from the past');
            } else if (moment(currentTime).format("HH") === startHour) {
                    this.props.setAlert('chosen time interval has already started');
            } else {
                this.props.removeAlert();
                return true;
            }
        } else {
            this.props.removeAlert();
            return true;
        }
    }

    compareCurrentDate(date) {

        const setNewDate = (date) => {
            this.props.removeAlert();
            this.props.setDate(date);
        };

        if (!date) {
            date = new Date();
        }
        let currentDate = new Date();
        let result = {};
        if (moment(currentDate).format("YYYY-MM-DD") > moment(date).format("YYYY-MM-DD")) {
            result.past = true;
            this.props.setAlert('chosen date is from the past');
        } else if (moment(currentDate).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")) {
            result.today = true;
            setNewDate(date);
        } else {
            setNewDate(date);
        }
        return result;
    }

    render() {

        const timeArray = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00', '19:00 - 22:00'];
        const listTimeItems = timeArray.map((timeItem) =>
            <div className="list-group-item cursor-pointer" onClick={() => this.setTime(timeItem)} tag="a" href="#"
                 key={timeItem}>{timeItem}</div>
        );

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col header-style">
                        <div className="app-name-style">book a table</div>
                        <div
                            className="app-logo-style">{this.props.restaurant.name}<br/> {this.props.restaurant.address}
                        </div>
                        <div className="row padding-bottom-20">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <div className="list-group padding-top-40">
                                    <div className="list-group-item first-row">Select time interval</div>
                                    {listTimeItems} 
                                </div>
                                <TopResult selected={this.props} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 padding-top-40 overflow-no">
                                <DatePicker
                                    inline
                                    dateFormat="YYYY/MM/DD"
                                    minDate={moment().subtract(7, "days")}
                                    maxDate={moment().add(3, "months")}
                                    selected={this.localBookDate}
                                    onChange={this.handleChangeDate}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 padding-top-40">
                                <Contact />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-auto padding-top-40">
                                <button type="button" 
                                        onClick={() => this.saveReservation()}
                                        className="btn btn-success save-button">Save reservation</button>
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