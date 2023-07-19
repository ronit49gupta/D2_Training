import React from "react";
import ConceptItems from "./ConceptItems";
import './Concepts.css';

const Concepts = (props) =>{
    return(
        <ul id="concepts">
            <ConceptItems 
                title={props.item[0].title}
                image={props.item[0].image}
                desc={props.item[0].description}
            />
            <ConceptItems 
                title={props.item[1].title}
                image={props.item[1].image}
                desc={props.item[1].description}
            />
            <ConceptItems 
                title={props.item[2].title}
                image={props.item[2].image}
                desc={props.item[2].description}
            />
        </ul>
    )
}

export default Concepts;