import React, {Component} from 'react';
import {connect} from 'react-redux';

import imgWood from './resources/wood-bg2.png';
import $ from 'jquery';

import Top from './containers/Top.js';
import Alert from './components/alert';
import Interior from './components/interior';
import './styles/App.css';


class App extends Component {

    constructor(props) {

        super(props)
    }

    componentDidMount() {

        $('[data-toggle="tooltip"]').tooltip('show');
    }

    render() {

        const mainBgStyle = {
            color: 'blue',
            background: `url(${imgWood}) repeat`
        };
        const arrangement = [
            {type: 'bar', description: 'bar counter', txtTooltip: 'bar seats', id: 'bar #1'},
            {type: 'table', description: 'table #1 - next to the bar', txtTooltip: '', id: 'table #1'},
            {type: 'table', description: 'table #2', txtTooltip: '', id: 'table #2'},
            {type: 'table', description: 'table #3 - next to a wall', txtTooltip: '', id: 'table #3'},
            {type: 'table', description: 'table #4 - next to the bar', txtTooltip: '', id: 'table #4'},
            {type: 'table', description: 'table #5', txtTooltip: '', id: 'table #5'},
            {type: 'flower', description: 'decorative element', txtTooltip: 'separates some tables', id: 'flower #1'},
            {type: 'table', description: 'table #6 - behind the decoration', txtTooltip: '', id: 'table #6'},
            {type: 'table', description: 'table #7', txtTooltip: '', id: 'table #7'},
            {type: 'table', description: 'table #8', txtTooltip: '', id: 'table #8'},
            {type: 'table', description: 'table #9', txtTooltip: '', id: 'table #9'},
            {type: 'table', description: 'table #10', txtTooltip: '', id: 'table #10'},
            {type: 'flower', description: 'decorative element', txtTooltip: 'separates some tables', id: 'flower #2'},
            {type: 'table', description: 'table #11', txtTooltip: '', id: 'table #11'},
            {type: 'table', description: 'table #12', txtTooltip: '', id: 'table #12'},
            {type: 'table', description: 'table #13 - at the corner', txtTooltip: '', id: 'table #13'}
        ];
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
                <Interior arrangement={arrangement} tableStatus={tableStatus}/>
                *
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);