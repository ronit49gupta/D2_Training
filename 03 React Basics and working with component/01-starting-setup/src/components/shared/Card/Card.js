import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='product'>{props.children}</div>
    )
};

export default Card;