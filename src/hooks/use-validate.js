import {useState} from "react";

const useValidate = (initValue,validateFn) => {
    const [value,setValue] = useState(initValue);
    const [valueIsTouched,setValueIsTouched] = useState(false);

    const valueChangeHandler = (e) => {
        setValue(e.target.value);
      };

    const valueBlurHandler = (e) => {
        setValueIsTouched(true);
    };

    const valueReset = () =>{
        setValue('')
        setValueIsTouched(false);
    }

    const valueIsValid = validateFn(value);
    const hasError = !valueIsValid && valueIsTouched;
    return {
        value,
        valueChangeHandler,
        valueBlurHandler,
        valueIsValid,
        hasError,
        setValueIsTouched,
        valueReset
    }
}

export default useValidate;