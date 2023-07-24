// Coding Exercise 13: Dynamic Styles

// 1. Your task is to dynamically apply a style (color: red) to 
//    the <p>Style me</p> element in the provided React app.

// 2. The style should be applied as an inline style (i.e., via the style attribute / prop) 
//    when the <button> is clicked for the first time. Once the button is clicked again, 
//    the styling should switch back to color: white, which should also be the initial style.

// 3. Make sure that the button toggles between these two styles (color: white <=> color: red).


// Coding Exercise 14: Dynamic CSS Classes

// 1. Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element 
//    in the provided React app. 

// 2. This task is therefore very similar to the previous coding exercise 13
//    but you're now going to set a CSS class dynamically - instead of an inline style.

// 3. The style should be applied as an CSS class (i.e., via the className attribute / prop) 
//    when the <button> is clicked for the first time. Once the button is clicked again, 
//    all CSS classes should be removed from the <p> element (this should also be the initial state).

// 4. Make sure that the button toggles between these two styles (no CSS class <=> active  CSS class).


import React, {useState} from 'react';

function App() {
  const [isClicked, setIsClicked ] = useState(false);
  
  const buttonClickHandler = () => {
    setIsClicked(prevClicked => !prevClicked);
  }
  return (
    <div>
        {/* Coding exercise 13 start */}
        <p style={
          {color : isClicked ? 'red' : 'white'}
        }>Style me!</p>
        {/* Coding exercise 13 end */}



        {/* Coding exercise 14 start */}
        <p className={isClicked ? 'active' : ''}>Style me!</p>
        {/* Coding exercise 14 end */}

        <button onClick={buttonClickHandler}>Toggle style</button>
    </div>
  );
}

export default App;
