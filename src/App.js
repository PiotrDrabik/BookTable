import React, { Component } from 'react';
import { connect } from 'react-redux';

import img from './resources/wood-bg2.png';
import table from './resources/table.png';
import Top from './containers/Top.js';
import './styles/App.css';

class App extends Component {
  
  constructor (props) {

      super(props)
  }

  render() {

    const mainBgStyle = {
        color: 'blue',
        background: `url(${img}) repeat`
    };
    const tableStyle = {
        color: 'black',
        background: `url(${table}) no-repeat`,
        backgroundSize: 'cover',
        height: '190px',
        width: '200px'
    };
    const buttonPosition = {
      marginTop: '-50%',
      marginLeft: '40%'
    };
    return (
      <div className="App" style={mainBgStyle}>
        <Top/>
        <div className="container-fluid" style={{backgroundColor: 'red'}}>
            <button type="button" className="btn btn-warning">Warning</button>
        </div>
         <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                 <div style={tableStyle}></div>
                 <button type="button" onClick={ () => console.log(this)} style={buttonPosition} className="btn btn-danger">Danger</button>
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
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);