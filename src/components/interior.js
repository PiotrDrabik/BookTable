import React from 'react';

import imgTable from './../resources/table.png';
import imgFlower from './../resources/flower.png';
import imgBarCounter from './../resources/bar-counter.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';


const Interior = (props) => {

    let {arrangement, tableStatus} = props;
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
        marginTop: '-73%',
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
    const whiteColor = {
        color: '#ffffff'
    };
    const tooltipPlacement = "bottom";
    const selectedElement = (item) => {
        switch (item) {
            case 'bar':
                return {bgStyle: barCounterStyle};
            case 'table':
                return {bgStyle: tableStyle};
            case 'flower':
                return {bgStyle: flowerStyle};
            default:
                return {};
        }
    };
    const selectedButton = (item) => {
        if (item.booked === undefined) {
            return {btnClass: 'btn btn-secondary', disabled: true};
        }
        switch (item.booked) {
            case true:
                return {btnClass: 'btn btn-danger', disabled: true};
            case false:
                return {btnClass: 'btn btn-success', disabled: false};
            default:
                return {};
        }
    };
    const defaultLabel = {
        buttonActive: <FontAwesomeIcon style={whiteColor} icon={faPlus} />,
        buttonInactive: <FontAwesomeIcon style={whiteColor} icon={faTimes} />,
        tooltipActive: 'can be booked',
        tooltipInactive: 'try to change time/date'
    };
    const listTables = arrangement.map((element) => {
            let item = selectedElement(element.type);
            let button = selectedButton(tableStatus[element.id] ? tableStatus[element.id] : {});

            return <div className="col-12 col-md-3" key={element.id}>
                <div style={item.bgStyle}></div>
                <button type="button" onClick={() => console.log(this)} style={buttonPosition} data-toggle="tooltip"
                        data-placement={tooltipPlacement} title={element.txtTooltip || tableStatus[element.id].txtTooltip || (button.disabled ? defaultLabel.tooltipInactive : defaultLabel.tooltipActive)}
                        className={button.btnClass} disabled={button.disabled}>
                    {tableStatus[element.id] ? tableStatus[element.id].btnLabel || (button.disabled ? defaultLabel.buttonInactive : defaultLabel.buttonActive) : ''}
                </button>
                <div style={descriptionPosition}>{element.description}</div>
            </div>
        }
    );
    return (
        <div className="container">
            <div className="row padding-bottom-20">
                {listTables}
            </div>
        </div>
    )
};

export default Interior;