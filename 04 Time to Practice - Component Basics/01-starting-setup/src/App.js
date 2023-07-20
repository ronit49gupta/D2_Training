// Creating a Demo App for diplaying data 

// Practiced topics : Component Creation, Component Splitting and Data Display. 

import React from 'react';
import Header from './Header/Header';
import Concepts from './components/Concepts/Concepts';
import * as utils from './utils';

function App() {
  return (
    <div>
      <Header/>
      <Concepts item={utils.concepts}/>
    </div>
  );
}

export default App;
