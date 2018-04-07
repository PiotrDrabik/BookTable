import React, {Component} from 'react';
import {connect} from 'react-redux';

import imgWood from './resources/wood-bg2.png';
import $ from 'jquery';
import axios from 'axios';

import * as action from './actions/index';
import Top from './containers/Top.js';
import Alert from './components/alert';
import Interior from './components/interior';
import './styles/App.css';


class App extends Component {

    constructor(props) {

        super(props)
    }

    componentDidMount() {

        this.getRestaurantArrangement().then( (data) => {
            this.props.setArrangement(data);
        }).then( () => {
            $('[data-toggle="tooltip"]').tooltip();
            //$('[data-toggle="tooltip"][disabled]').tooltip('show');
        });
    }

    getRestaurantArrangement() {

        const ARRANGEMENT_URL = 'http://book-table.papoldesign.pl/index.php';
        return axios.get(ARRANGEMENT_URL).then( (response) => {
            return response.data;
        });
    }

    render() {

        const mainBgStyle = {
            color: 'blue',
            background: `url(${imgWood}) repeat`,
            minWidth: '310px'
        };
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
                <Interior arrangement={this.props.restaurant.arrangement} tableStatus={tableStatus}/>
                <button type="button" onClick={() => console.log(this.props)}>Props</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {
        setArrangement: (data) => dispatch(action.setArrangement(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);