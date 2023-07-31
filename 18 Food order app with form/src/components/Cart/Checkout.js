import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    });

    const nameInputref = useRef();
    const streetInputref = useRef(); 
    const postalCodeInputref = useRef(); 
    const cityInputref = useRef(); 
    
    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputref.current.value;
        const enteredStreet = streetInputref.current.value;
        const enteredPostal = postalCodeInputref.current.value;
        const enteredCity = cityInputref.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = !isFiveChar(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormValidity({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            postalCode:enteredPostalCodeIsValid,
            city:enteredCityIsValid,
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

        if(!formIsValid){
            return;
        }

        // submitting data
        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostal,
            city: enteredCity
        });
    };

    const nameControlClasses = `${classes.control} ${formValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formValidity.street ? '' : classes.invalid}`;
    const postalcodeControlClasses = `${classes.control} ${formValidity.postalCode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formValidity.city ? '' : classes.invalid}`;
    
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputref}/>
                {!formValidity.name && <p>Please enter name</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputref}/>
                {!formValidity.street && <p>Please enter street</p>}
            </div>
            <div className={postalcodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputref}/>
                {!formValidity.postalCode && <p>Please enter valid postal code</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputref}/>
                {!formValidity.city && <p>Please enter city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                Cancel
                </button>
                <button type='submit' className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;