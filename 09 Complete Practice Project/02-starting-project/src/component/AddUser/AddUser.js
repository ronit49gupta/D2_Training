import React, { useState } from 'react';
import './AddUser.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Model from '../UI/Model/Model';

function AddUser(props) {
    const [userName, setUserName] =  useState('');
    const [age, setAge] =  useState('');
    const [isError, setIserror] =  useState(null);
    const submitForm = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || age.trim().length === 0){
            setIserror({
                title: 'Invalid input',
                message: 'Please enter a valid name or age (non-empty values).'
            });
            return;
        }
        if(+age < 1){
            setIserror({
                title: 'Invalid age',
                message: 'Age should be greater then 0'
            });
            return;
        }
        props.onSave(userName, age);
        setUserName('');
        setAge('');

    };

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const errorHandler=()=>{
        setIserror(null)
    }

  return (
    <div>
        {isError && (<Model title={isError.title} message={isError.message}  onClick={errorHandler}/>)}
        <Card className="input">
            <form onSubmit={submitForm}>
                <label>Username</label>
                <input 
                    type='text'
                    id='userName'
                    value={userName}
                    onChange={usernameChangeHandler}
                />
                <label>Age (Years)</label>
                <input
                    type='number'
                    id='age'
                    value={age}
                    onChange={ageChangeHandler}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </div>
  );
}

export default AddUser;
