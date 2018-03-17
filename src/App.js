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
            marginTop: '-70%',
            marginLeft: '40%'
        };
        const descriptionPosition = {
            marginTop: '-20%',
            marginLeft: '40%',
            backgroundColor: '#f0f0f0',
            color: 'black',
            borderRadius: '5px',
            fontSize: '11px'
        };
        return (
            <div className="App" style={mainBgStyle}>
                <Top/>
                <Alert alert={this.props.alert}/>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div style={barCounterStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="bar seats"
                                    className="btn btn-secondary" disabled>
                            </button>
                            <div style={descriptionPosition}>bar counter</div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="try to change time/date"
                                    className="btn btn-danger" disabled>Booked
                            </button>
                            <div style={descriptionPosition}>table #1 - next to bar</div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="can be booked"
                                    className="btn btn-success">Book
                            </button>
                            <div style={descriptionPosition}>table #2</div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div style={tableStyle}></div>
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="can be booked"
                                    className="btn btn-success">Book
                            </button>
                            <div style={descriptionPosition}>table #3 - next to a wall</div>
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
                            <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip" data-placement="top" title="separates some tables"
                                    className="btn btn-secondary" disabled>
                            </button>
                            <div style={descriptionPosition}>decorative element</div>
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