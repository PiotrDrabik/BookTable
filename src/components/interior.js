import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import {selectedElement, buttonPosition, descriptionPosition} from './interior-resources';

const Interior = (props) => {

    let {arrangement, tableStatus} = props;

    const tooltipPlacement = "bottom";
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
        buttonActive: <FontAwesomeIcon className="white-txt" icon={faPlus} />,
        buttonInactive: <FontAwesomeIcon className="white-txt" icon={faTimes} />,
        tooltipActive: 'can be booked',
        tooltipInactive: 'try to change time/date'
    };
    const listTables = arrangement.map((element) => {
        let item = selectedElement(element.type);
        let button = selectedButton(tableStatus[element.field_id] ? tableStatus[element.field_id] : {});
        let tooltipTitle = element.txt_tooltip || tableStatus[element.field_id].txtTooltip || (button.disabled ? defaultLabel.tooltipInactive : defaultLabel.tooltipActive);

        return <div className="col-12 col-md-3" key={element.field_id}>
                    <div style={item.bgStyle}></div>
                    <button type="button" onClick={() => console.log(arrangement)} style={buttonPosition} data-toggle={button.disabled ? '' :'tooltip'}
                            data-placement={tooltipPlacement} title={tooltipTitle} className={button.btnClass} disabled={button.disabled}>
                        {tableStatus[element.field_id] ? tableStatus[element.field_id].btnLabel || (button.disabled ? defaultLabel.buttonInactive : defaultLabel.buttonActive) : ''}
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