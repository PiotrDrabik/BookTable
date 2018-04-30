import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as action from './../actions/index';
import './Contact.css';

class Contact extends Component {

    render() {

        return (
            <div>
            <div className="container-fluid txt-contact first-row border-contact">
                <div className="padding-top-bot-5 txt-center"><strong>Contact</strong></div>
                <div><hr /></div>
                <div className="font-contact">Put your name and e-mail address. The confirmation e-mail will be sent.</div>
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" value={this.props.contact.name} onChange={(e) => {this.props.setName(e.target.value)}} placeholder="Name" />
                        </div>
                        <div className="col">
                            <input type="email" className="form-control form-control-sm" value={this.props.contact.email} onChange={(e) => {this.props.setEmail(e.target.value)}} placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group padding-top-15">
                                <div className="font-contact">Would you like to leave some comment? You can put your phone number below.</div>
                                <textarea className="form-control form-control-sm" id="formControlTextarea1" rows="3" value={this.props.contact.comment} onChange={(e) => {this.props.setComment(e.target.value)}} placeholder="Comment / Phone number"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
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
        setAlert: (message) => dispatch(action.setAlert(message)),
        setName: (name) => dispatch(action.setName(name)),
        setEmail: (email) => dispatch(action.setEmail(email)),
        setComment: (comment) => dispatch(action.setComment(comment))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);