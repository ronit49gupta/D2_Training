import React from "react";
import Card from "../UI/Card/Card";
import './ConceptItems.css'

const ConceptItems = (props) =>{
    return (
        <Card>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </Card>
    )
};

export default ConceptItems;