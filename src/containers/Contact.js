import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as action from './../actions/index';
import './Contact.css';

class Contact extends Component {

    constructor(props) {

        super(props)
    }

    render() {

        return (
            <div className="container-fluid txt-contact first-row border-contact">
                <div className="padding-top-bot-5"><strong>Contact</strong></div>
                <div className="font-contact">Put your name and e-mail address. The confirmation e-mail will be sent.</div>
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="Name" />
                        </div>
                        <div class="col">
                            <input type="email" className="form-control form-control-sm" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="form-group padding-top-15">
                                <div className="font-contact">Would you like to leave some comment? You can put your phone number below.</div>
                                <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3" placeholder="Comment / Phone number"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);