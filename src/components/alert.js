import React from 'react';

const Alert = (props) => {

    let {alert} = props;
    const alertStyle = {
        backgroundColor: 'red',
        padding: '4px'
    };
    return (
            <span>
                {alert.enabled ?
                <div className="container-fluid" onClick={() => console.log(alert.enabled)} style={alertStyle}>
                    <span className="btn btn-warning btn-sm">{alert.message}</span>
                </div> : ''}
            </span>
        )
};

export default Alert;