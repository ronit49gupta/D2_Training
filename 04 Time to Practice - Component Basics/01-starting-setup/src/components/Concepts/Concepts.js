import React from "react";
import ConceptItems from "./ConceptItems";
import './Concepts.css';

const Concepts = (props) =>{
    return(
        <ul id="concepts">
            {props.items.map(item => (
                <ConceptItems 
                    title={item.title}
                    image={item.image}
                    desc={item.description}
                />  
            ))}
        </ul>
    )
}

export default Concepts;