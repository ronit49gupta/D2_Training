// Coding Exercise 5: Passing Data via "props"

// 1. You're working on the UI prototype for an online shop 
//    and your task is to output two product items 
//    (via the <Product /> component you find in the Product.js file) 
//    below the main page title ("My Demo Shop") in the App component.

// 2. The two product items should use the same component (<Product />) 
//    but output different data (title, price & description). 
//    Data should be passed to the components (and output there) via props.

// 3. The first product item is expected to display the following information:

// Title: Product 1
// Price: 10
// Description: First product

// 4. The second product item is expected to display the following information:

// Title: Product 2
// Price: 20
// Description: Second product


// Coding Exercise 6: Component Composition

// You are working on a UI prototype for a "Products" application. 
// At the moment, the prototype displays some basic products for heading, price and a short info message.


// 1. Your task is to optimize the code and use React component composition 
//    to create a re-usable <Card /> component that can be wrapped 
//    around different content (e.g., product markup, info message markup).

// 2. The final UI should look like the initial UI - i.e., 
//    no styling changes are required. 
//    But the code should change and embraces React's composability.

// 3. Create the <Card /> component with new Card.js file 
// and use a <div> as a main element in that component.

import React from 'react';
import Card from "../shared/Card/Card";
import "./Product.css";

export default function Product(props) {
    return (
        // {* Coding Exercise 5 code start *}
        // Commenting this code and implemented it with card in coding exercise 6
        // <article className="product">
        //     <h2>{props.title}</h2>
        //     <p className="price">{props.price}</p>
        //     <p>{props.desc}</p>
        // </article>
        // {* Coding Exercise 5 code end *}


        // {* Coding Exercise 6 code start *}
        <Card>
            <h2>{props.title}</h2>
            <p className="price">{props.price}</p>
            <p>{props.desc}</p>
        </Card>
        // {* Coding Exercise 6 code End *}
    );
}