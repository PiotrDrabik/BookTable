import React, {Component} from 'react';
import {connect} from 'react-redux';

import imgWood from './resources/wood-bg2.png';
import imgTable from './resources/table.png';
import imgFlower from './resources/flower.png';
import imgBarCounter from './resources/bar-counter.png';
import $ from 'jquery';

import Top from './containers/Top.js';
import Alert from './components/alert';
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
        const tableStyle = {
            color: 'black',
            background: `url(${imgTable}) no-repeat`,
            backgroundSize: 'cover',
            height: '190px',
            width: '200px'
        };
        const flowerStyle = {
            color: 'black',
            background: `url(${imgFlower}) no-repeat`,
            backgroundSize: 'cover',
            height: '180px',
            width: '180px'
        };
        const barCounterStyle = {
            color: 'black',
            background: `url(${imgBarCounter}) no-repeat`,
            backgroundSize: 'cover',
            height: '200px',
            width: '200px'
        };
        const buttonPosition = {
            marginTop: '-50%',
            marginLeft: '40%'
        };
        return (
            <div className="App" style={mainBgStyle}>
                <Top/>
                <Alert alert={this.props.alert}/>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div style={barCounterStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="Tooltip on top"
                                    className="btn btn-danger">Danger
                            </button>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="Tooltip on top"
                                    className="btn btn-success">Success
                            </button>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="Tooltip on top"
                                    className="btn btn-success">Success
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={flowerStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                    </div>
                    <div className="row padding-bottom-20">
                        <div className="col-12 col-md-3">
                            <div style={flowerStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                        </div>
                    </div>
                </div>
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