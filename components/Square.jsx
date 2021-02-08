import React from 'react';
import { Button } from 'react-native';

const style = {
    background: 'lightorange',
    border: '3px solid darkblue',
    fontSize: '50px',
    fontWeight: '720',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;