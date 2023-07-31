import { useReducer } from "react";

const initialValue = {
    value: '',
    isTouched: false
}

const reducerFn = (state, action) =>{
    if(action.type === 'INPUT'){
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    } else if(action.type === 'BLUR'){
        return {
            isTouched: true,
            value: state.value
        }
    } else if(action.type === 'RESET'){
        return{
            isTouched: false,
            value: ''
        }
    }

    return initialValue;
}

const useInput = (validateFn) => {
    
    const [inputState, dispatch] = useReducer(reducerFn, initialValue);

    const inputValueIsValid = validateFn(inputState.value);
    const hasError = !inputValueIsValid && inputState.isTouched;

    const inputValueChangeHandler = (event) =>{
        dispatch({type: 'INPUT', value: event.target.value });
    };

    const inputValueBlurHandler = (event) =>{
        dispatch({type: 'BLUR' });
    }

    const reset = () => {
        dispatch({type: 'RESET' });
    }

    return (
        {
            value: inputState.value,
            isValid: inputValueIsValid,
            hasError,
            inputValueChangeHandler,
            inputValueBlurHandler,
            reset
        }
    )
}

export default useInput;