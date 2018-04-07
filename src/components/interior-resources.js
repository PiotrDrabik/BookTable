import imgTable from './../resources/table.png';
import imgFlower from './../resources/flower.png';
import imgBarCounter from './../resources/bar-counter.png';

export const tableStyle = {
    color: 'black',
    background: `url(${imgTable}) no-repeat`,
    backgroundSize: 'cover',
    height: '190px',
    width: '200px'
};

export const flowerStyle = {
    color: 'black',
    background: `url(${imgFlower}) no-repeat`,
    backgroundSize: 'cover',
    height: '180px',
    width: '180px'
};

export const barCounterStyle = {
    color: 'black',
    background: `url(${imgBarCounter}) no-repeat`,
    backgroundSize: 'cover',
    height: '200px',
    width: '200px'
};

export const selectedElement = (item) => {
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

export const selectedButton = (item) => {
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

export const buttonPosition = {
    marginTop: '-73%',
    marginLeft: '40%'
};

export const descriptionPosition = {
    marginTop: '-20%',
    marginLeft: '40%',
    backgroundColor: '#f0f0f0',
    color: 'black',
    borderRadius: '5px',
    fontSize: '11px'
};