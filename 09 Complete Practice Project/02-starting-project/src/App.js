import React, { useState } from 'react';
import UserList from './component/UserList/UserList';
import AddUser from './component/AddUser/AddUser';

function App() {
const [userData, setUserData] = useState([]);

const addUserHandler = (uName, uAge) => {
  setUserData((prevData)=>{
    return [...prevData, {userName: uName, age: uAge}];
  })
}


  return (
    <div>
      <AddUser onSave={addUserHandler} />
      <UserList listArray={userData}/>
    </div>
  );
}

export default App;
