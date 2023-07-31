import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputValueChangeHandler: firstNameChangeHandlerFn,
    inputValueBlurHandler: firstNameBlurHandlerFn,
    reset: firstNameResetFn
  } = useInput(value => value.trim() !== '');

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputValueChangeHandler: lastNameChangeHandlerFn,
    inputValueBlurHandler: lastNameBlurHandlerFn,
    reset: lastNameResetFn
  } = useInput(value => value.trim() !== '');

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputValueChangeHandler: emailChangeHandlerFn,
    inputValueBlurHandler: emailBlurHandlerFn,
    reset: emailResetFn
  } = useInput(value => value.includes('@'));

  let forIsValid = false;

  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    forIsValid = true;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    if(!forIsValid){
      return;
    }

    console.log(firstNameValue, lastNameValue, emailValue);

    firstNameResetFn();
    lastNameResetFn();
    emailResetFn();

  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onFormSubmit}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstNameValue}
            onChange={firstNameChangeHandlerFn}
            onBlur={firstNameBlurHandlerFn}
          />
          {firstNameHasError && <p className="error-text">Please enter first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastNameValue}
            onChange={lastNameChangeHandlerFn}
            onBlur={lastNameBlurHandlerFn}
          />
          {lastNameHasError && <p className="error-text">Please enter last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='email'
          id='email' 
          value={emailValue}
          onChange={emailChangeHandlerFn}
          onBlur={emailBlurHandlerFn}
        />
        {emailHasError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!forIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
