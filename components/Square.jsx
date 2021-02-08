import React from 'react';
import { Button } from 'react-native';

const style = {
    background: 'lightblue',
    border: '3px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;