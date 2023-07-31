import React, { useState } from 'react';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    inputValueChangeHandler: nameChangeHandlerFn,
    inputValueBlurHandler: nameBlurHandlerFn,
    reset: resetNameFn
  } = useInput(value => value.trim() !== '');

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputValueChangeHandler: emailChangeHandlerFn,
    inputValueBlurHandler: emailBlurHandlerFn,
    reset: resetEmailFn
  } = useInput(value => value.includes('@'));

  
  let isFormValid = false
  if(nameIsValid && emailIsValid){
    isFormValid = true;
  };

  const onFormSubmit = (event) =>{
    event.preventDefault();

    console.log(nameValue);
    console.log(emailValue);

    resetNameFn();
    resetEmailFn();
  };


  const formGroupClassInput = nameInputHasError ? 'form-control invalid' : 'form-control';
  const formGroupClassEmail = emailInputHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={onFormSubmit}>
      <div className={formGroupClassInput}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandlerFn}
          onBlur={nameBlurHandlerFn}
          value={nameValue}
        />
        {nameInputHasError && <p className='error-text'>Not a valid entry.</p> }
      </div>
      <div className={formGroupClassEmail}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandlerFn}
          onBlur={emailBlurHandlerFn}
          value={emailValue}
        />
        {emailInputHasError && <p className='error-text'>Not a valid email.</p> }
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
