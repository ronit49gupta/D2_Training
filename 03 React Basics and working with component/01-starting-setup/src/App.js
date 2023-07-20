// Coding Exercise 3 : Working with JSX Code

// Task

// 1. This is a quick exercise to get started with React and JSX code: 
//    Your task is to edit the JSX code of a provided React component such that
//    it displays a h1 element with the text "Exercise done!" on the page.

// Important: The custom JSX code must be added inside the existing <div> element.

import React from "react";
import * as utils from './utils'
import ExerciseComponent from './components/ExerciseComponent';
import Product from './components/products/Product';

function App() {
  
  return (
    <div>
      {/* Coding Exercise 3 code start */}
      <h1>Exercise done!</h1>
      {/* Coding Exercise 3 code end */}
      <h2>Let's get started!</h2>

      {/* Coding Exercise 4 code start */}
      <ExerciseComponent></ExerciseComponent>
      {/* Coding Exercise 4 code end */}

      {/* Coding Exercise 5 code start */}
      <h1>My Demo Shop</h1>
      <Product 
        title={utils.products[0].title}
        price={utils.products[0].price}
        desc={utils.products[0].description}>
      </Product>
      <Product 
        title={utils.products[1].title}
        price={utils.products[1].price}
        desc={utils.products[1].description}>
      </Product>
      {/* Coding Exercise 5 code end */}
    </div>
  );
}

export default App;