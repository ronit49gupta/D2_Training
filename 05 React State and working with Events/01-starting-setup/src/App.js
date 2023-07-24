// Coding Exercise 7: Listening to Events

// Imagine you're working on a brand-new React app that should allow users to bookmark articles 
// (e.g., news articles).

// To start with your work, your task is to "connect" a click event listener to 
// an already existing button and output "Stored!" via console.log(). 
// And, of course, you should do that "the React way".




// Coding Exercise 8: Working with "State"

// You're working on a part of an online shop where a discounted price 
// should be displayed on the screen once the user clicked a button.

// 1. Your task is to add an event listener to listen for clicks on the button 
//    that's already included in the App component.

// 2. Upon a button click, the price should change from $100 to $75.

// 3. Add a state value to the existing App component function and make sure 
//    the state value is both updated upon button clicks and output as part of the JSX code.




// Coding Exercise 9: Using State with Form Inputs

// 1. You're working on a text messaging app and your task is to validate 
//    the text entered by a user whilst the user is typing.

// 2. If the text message entered is valid (for this example: if it's at least 3 characters long),
//    the text "Valid message" should be displayed below the input field. 
//    If it's invalid (i.e., shorter than 3 characters), 
//    the text "Invalid message" should be displayed.



// Coding Exercise 10: Updating State Based On Older State

// 1. Your task is to build a basic counter that should increment 
//    whenever the "Increment" button is clicked.



import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

function App() {
  // coding exercise 7 start
  const clickHandler = () => {
    console.log('Stored!');
  }
  // coding exercise 7 end


  // coding exercise 8 start
  let itemPrice = 100;
  const [price, setPrice] = useState(itemPrice);

  const changePrice = () => {
    setPrice(75);
  }
  // coding exercise 8 end
  
  
  // coding exercise 9 start
  let defaultValidityMessage = <FormattedMessage id='app.validity' defaultMessage="Invalid" values={{validity : 'Invalid'}}/>;

  const [validityMessage, setValidityMessage] = useState(defaultValidityMessage);
  
  const checkValidityHandler = (event) => {
    const inputValue = event.target.value
    if (inputValue.trim().length < 3) {
      const validityMessage = <FormattedMessage id='app.validity' defaultMessage="Invalid" values={{validity : 'Invalid'}}/>;
      setValidityMessage(validityMessage)
    } else {
      const validityMessage = <FormattedMessage id='app.validity' defaultMessage="Valid" values={{validity : 'Valid'}}/>;
      setValidityMessage(validityMessage)
    }
  };
  // coding exercise 9 end


  // coding exercise 10 start
  let initialValue = 0;

  const [counterValue, setCounterValue] =  useState(initialValue)
  
  const incrementHandler = () =>{
    setCounterValue(prevCounterValue => prevCounterValue + 1);
  }
  // coding exercise 10 end
  
  return (
    <div>
      {/* coding exercise 7 start */}
      <button onClick={clickHandler}>
        <FormattedMessage
          id='app.bookmark'
          defaultMessage="Bookmark"
        />
      </button>
      {/* coding exercise 7 end */}



      {/* coding exercise 8 start */}
      <div>
        <p>{price}</p>
        <button onClick={changePrice}>
          <FormattedMessage
            id='app.discount'
            defaultMessage="Apply Discount"
          />
        </button>
      </div>
      {/* coding exercise 8 end */}


      {/* coding exercise 9 start */}
      <form>
          <label htmlFor='yourMessage'>
            <FormattedMessage 
              id='app.messageLabel' 
              defaultMessage="Your message"
            />
          </label>
          <input id='yourMessage' type="text" onChange={checkValidityHandler}/>
          <p>{validityMessage}</p>
      </form>
      {/* coding exercise 9 end */}


      {/* coding exercise 10 Start */}
      <div>
        <p id="counter">{counterValue}</p>
        <button onClick={incrementHandler}>
          <FormattedMessage 
            id='app.condition' 
            defaultMessage="Increment"
            values = {{condition: 'Increment'}}
          />
        </button>
      </div>
      {/* coding exercise 10 End */}

    </div>
  );
}

export default App;
