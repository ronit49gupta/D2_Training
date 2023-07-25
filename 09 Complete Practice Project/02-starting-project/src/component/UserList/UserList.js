import React from 'react';
import './UserList.css';
import Card from '../UI/Card/Card';


function UserList(props) {
  return (
    <div>
      {props.listArray.length > 0 && 
        <Card className='users'>
          <ul>
            {props.listArray.map((item)=>(
                console.log(item),
                <li key={item.age}>{item.userName} is {item.age} years old.</li>
            ))}
          </ul>
        </Card>
      }
    </div>  
  );
}

export default UserList;
