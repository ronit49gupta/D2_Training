import React from "react";
import ConceptItems from "./ConceptItems";
import './Concepts.css';

const Concepts = (props) =>{
    return(
        <ul id="concepts">
            {props.item.map(item => (
                <ConceptItems 
                    title={props.title}
                    image={props.image}
                    desc={props.description}
                />  
            ))}
        </ul>
    )
}

export default Concepts;