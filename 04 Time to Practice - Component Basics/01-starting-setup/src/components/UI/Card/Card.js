import React from "react";
import './Card.css';

const Card = (props) =>{
    return (
        <li className='concept'>{props.children}</li>
    )
};

export default Card;