import { useState } from "react";

const useInput =(validateValue)=>{
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);

    const valueIsValid = validateValue.trim() !== '';
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) =>{
     setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) =>{
    setIsTouched(true);
    };

    return{
        value : enteredValue,
        isValid:valueIsValid,
        hasError,
        valueChangeHandler, 
        inputBlurHandler
    };
};

export default useInput;