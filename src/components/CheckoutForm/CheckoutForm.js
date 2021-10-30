import React from "react";
import Button from "../UI/Button/Button";
import useValidate from "../../hooks/use-validate";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const {
    value: name,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler:nameBlurHandler,
    valueIsValid : nameIsValid,
    hasError : nameHasError,
    setValueIsTouched: setNameIsTouched,
    valueReset: nameReset
  } = useValidate("", (name) => name.length > 3);
  

  const {
    value: street,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler:streetBlurHandler,
    valueIsValid : streetIsValid,
    hasError : streetHasError,
    setValueIsTouched: setStreetIsTouched,
    valueReset: streetReset
  } = useValidate("", (street) => street!=='');

  const {
    value: postalCode,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    valueIsValid : postalCodeIsValid,
    hasError : postalCodeHasError,
    setValueIsTouched: setPostalCodeIsTouched,
    valueReset: postalCodeReset
  } = useValidate("", (postal_code) => postal_code!=='');

  const {
    value: city,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    valueIsValid : cityIsValid,
    hasError : cityHasError,
    setValueIsTouched: setCityIsTouched,
    valueReset: cityReset
  } = useValidate("", (city) => city!=='');


  const submitHandler = (e) => {
    e.preventDefault();
    setNameIsTouched(true);
    setStreetIsTouched(true);
    setPostalCodeIsTouched(true);
    setCityIsTouched(true);

    if(isFormValid){
      props.onSubmitForm({
        name: name,
        street: street,
        city: city,
        postalCode: postalCode
      });
      console.log("submitted!!!");
      nameReset();
      streetReset();
      postalCodeReset();
      cityReset();
    }
    else  
      return;
  };

  const isFormValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  return (
    <section>
      <form className={styles["checkout-form"]} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={name}
          ></input>
          <p className={styles["error"]}>
            {nameHasError && "Enter a valid name(minimum 3 characters)!!"}
          </p>
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value ={street}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
          ></input>
          <p className={styles["error"]}>
            {streetHasError && "Street is mandatory!!"}
          </p>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input type="number" id="postalCode" value = {postalCode} onChange = {postalCodeChangeHandler} onBlur={postalCodeBlurHandler}></input>
          <p className={styles["error"]}>
            {postalCodeHasError && "Enter a valid Postal Code!!"}
          </p>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" value = {city} onChange={cityChangeHandler} onBlur = {cityBlurHandler}></input>
          <p className={styles["error"]}>
            {cityHasError && "Enter a valid city(minimum 3 characters)!!"}
          </p>
        </div>
        <div className={styles["checkout-form__action"]}>
          <Button
            type="button"
            onClick={props.onhideCartHandler}
            value="Cancel"
          ></Button>
          <Button type="submit" onClick={submitHandler} value="Order"></Button>
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
