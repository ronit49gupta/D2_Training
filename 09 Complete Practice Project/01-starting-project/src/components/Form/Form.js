import React, { useState } from "react";
import './Form.css';

const Form =(props)=>{
    const initialUserInput = {
        'current-savings': 10000,
        'yearly-contribution': 12,
        'expected-return': 7,
        duration: 10
    }

    const [formValue, setFormValue] = useState(initialUserInput);
    
    const submitHandler = (event) => {
        event.preventDefault();

        props.onSubmit(formValue);

        setFormValue(initialUserInput);
    }

    const resetHandler = () => {
        setFormValue(initialUserInput);
    }

    const inputChangeHandler = (input, value) => {
        setFormValue((prevValue)=>{
            return {
                ...prevValue,
                [input]: +value
            }
        });
    }

    return(
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
                type="number"
                id="current-savings" 
                value={formValue['current-savings']}
                onChange={(event) => 
                    inputChangeHandler('current-savings', event.target.value)
                }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
                type="number" 
                id="yearly-contribution"
                value={formValue['yearly-contribution']}
                onChange={(event) =>
                    inputChangeHandler('yearly-contribution', event.target.value)
                }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
                type="number"
                id="expected-return"
                value={formValue['expected-return']}
                onChange={ (event) =>
                    inputChangeHandler('expected-return', event.target.value)
                }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
                type="number"
                id="duration"
                value={formValue['duration']}
                onChange={(event) =>
                    inputChangeHandler('duration', event.target.value)
                }
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}
export default Form;