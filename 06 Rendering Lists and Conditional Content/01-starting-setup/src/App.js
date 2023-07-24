// Coding Exercise 11: Rendering Lists of Data

// You're working on a "Todo List" web app and your task is to output a list of dummy todo items dynamically.
// For this task, a Todo component has been prepared for you, 
// though you must still add some code to it to receive and output the todo text.




// Coding Exercise 12: Outputting Conditional Content

// 1. You're working on a part of a web app that's responsible for showing a warning 
//    when a user is about to perform a dangerous action.

// 2. Therefore, your task is to conditionally show a warning box once a user has clicked 
//    a specific button. 

// 3. Inside that warning dialog, another button allows users to dismiss the warning 
//    (i.e., remove the warning box from the screen).

import React, { useState } from 'react';
import Todo from './Todo';

// Coding Exercise 11 Start
import * as utils from './utils';
// Coding Exercise 11 End


function App() {

  // Coding Exercise 12 Start
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = () => {
    setIsDeleting(true);
  }

  const cancelDeleteHandler = () => {
    setIsDeleting(false);
  }
  // Coding Exercise 12 End

  return (
    <div>

      {/* Coding Exercise 11 Start */}
      <ul>
        {utils.DUMMY_TODOS.map((item)=>(<Todo todoItems={item}></Todo>))}
      </ul>
      {/* Coding Exercise 11 End */}


      {/* Coding Exercise 12 Start */}
      { isDeleting ?
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={cancelDeleteHandler}>Proceed</button>
        </div>
        : ""
      }
      <button onClick={deleteHandler}>Delete</button>
      {/* Coding Exercise 12 End */}

    </div> 
  );
}

export default App;