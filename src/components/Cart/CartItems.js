import React, { useContext,useState } from "react";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartContext from "../context/cart-context";
import styles from "./CartItems.module.css";

const CartItems = (props) => {

  const ctx = useContext(CartContext);
  const [hasError,setHasError] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting,setIsSubmitting] = useState(false);

  const hasItems = (ctx.items.length > 0);

  const formSubmitHandler = (customerInfo) =>{
    setIsSubmitting(true);
    fetch('https://food--ordering-default-rtdb.firebaseio.com/orders.json',
    {
      method:'POST',
      body:JSON.stringify({
        foodItems:ctx.items,
        customerInfo: customerInfo
      })
    }).then((response) => {
      if(response.ok){
        ctx.truncateItems();
        setIsSubmitted(true);
        return response.json();
      }
      return response.json();
    }).then((data) => console.log(data)) 
    .catch((err) => {
      console.log(err);
      setHasError(err)});

    setIsSubmitting(false);
  }



  const itemsContent = hasError ? <p> Something went wrong!! </p> :
                       isSubmitting ? <p> Order in progress.... </p> :
                       isSubmitted ? <p> Your order sucessfully placed!! </p> :
  hasItems ? (
          ctx.items.map((cartItem, index) => {
      return (
        <CartItem
          key={index}
          id={index}
          dishName={cartItem.dishName}
          dishPrice={cartItem.dishPrice}
          dishQuantity={cartItem.dishQuantity}
        >
        </CartItem>
      )
    })
  ) 
    :<p>Cart is empty!! Add something to Cart</p>

  const itemsFooterContent = hasItems && !hasError && <> <hr></hr>
    <div className={styles["cart-items__footer"]}> 
      <div><strong>Total Amount</strong></div>
      <div><strong>${ctx.totalAmount.toFixed(2)}</strong></div>
    </div>
    <hr></hr>
    </>;


  return (
    <Card className={styles["cart-item__container"]}>
      {itemsContent}
      {itemsFooterContent}
      {hasItems && !hasError && <CheckoutForm onhideCartHandler ={props.onhideCartHandler} onSubmitForm = {formSubmitHandler}></CheckoutForm>}
    </Card>
  );
};

export default CartItems;
