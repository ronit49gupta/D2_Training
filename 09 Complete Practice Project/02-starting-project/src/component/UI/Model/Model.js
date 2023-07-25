import React from 'react';
import './Model.css';
import Button from '../Button/Button';
import Card from '../Card/Card';


function Model(props) {
  return (
    <div className='backdrop' onClick={props.onClick}>
        <Card className='modal'>
            <div className='header'>
                <h2>{props.title}</h2>
            </div>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <div className='actions'>
                <Button type='button' name='okay' onClick={props.onClick}>Okay</Button>
            </div>
        </Card>
    </div>
  );
}

export default Model;