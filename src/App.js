import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import imgWood from './resources/wood-bg2.png';
import $ from 'jquery';

import * as action from './actions/index';
import Top from './containers/Top.js';
import Alert from './components/alert';
import Interior from './components/interior';
import './styles/App.css';
import * as HTTP from './serviceHttp';

class App extends Component {

    componentDidMount() {

        this.getRestaurantArrangement().then( (data) => {
            this.props.setArrangement(data);
        }).then( () => {
            $('[data-toggle="tooltip"]').tooltip();
            /* to always display the tooltip on disabled buttons:
             *  $('[data-toggle="tooltip"][disabled]').tooltip('show');
             */
        });
    }

    getRestaurantArrangement() {

        return HTTP.GET().then( (response) => {
            return response.data;
        });
    }

    render() {

        const mainBgStyle = {
            color: 'blue',
            background: `url(${imgWood}) repeat`,
            minWidth: '310px'
        };
        /* TODO replace this by GET data from the backend every time if data and time is selected
         */
        const tableStatus = {
            'table #1': {booked: true, btnLabel: 'pending', txtTooltip: 'try to change time/date'},
            'table #2': {booked: false},
            'table #3': {booked: false},
            'table #4': {booked: true, txtTooltip: 'try to change time/date'},
            'table #5': {booked: false},
            'table #6': {booked: false},
            'table #7': {booked: false},
            'table #8': {booked: true, txtTooltip: 'try to change time/date'},
            'table #9': {booked: true, txtTooltip: 'try to change time/date'},
            'table #10': {booked: false},
            'table #11': {booked: false},
            'table #12': {booked: false},
            'table #13': {booked: true}
        };
        return (
            <div className="App" style={mainBgStyle}>
                <Top/>
                <Alert alert={this.props.alert}/>
                <Interior arrangement={this.props.restaurant.arrangement} tableStatus={tableStatus} setTable={this.props.setTable} />
                <br/>
                <Router>
                    <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:id" component={About} />
                    </div>
                </Router>
                <button type="button" onClick={() => console.log(this.props)}>Props</button>
            </div>
        );
    }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = ({ match }) => {
    return (
    <div>
        <h2 onClick={() => console.log(match.params)}>About</h2>
    </div>
    )
};

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {
        setArrangement: (data) => dispatch(action.setArrangement(data)),
        setTable: (table, id) => dispatch(action.setTable(table, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);