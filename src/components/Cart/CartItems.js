import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";
import CartContext from "../context/cart-context";
import styles from "./CartItems.module.css";

const CartItems = () => {

  const cartItemChangeHandler = () =>{

  }
  
  const ctx = useContext(CartContext);
  return (
    <Card className={styles["cart-item__container"]}>
      {ctx.items.length ? (
        ctx.items.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              id={index}
              dishName={cartItem.dishName}
              dishPrice={cartItem.dishPrice}
              dishQuantity={cartItem.dishQuantity}
              onChange = {cartItemChangeHandler}
            >
              
            </CartItem>
          );
        })
      ) : (
        <p>Cart is empty!! Add something to Cart</p>
      )}
      {ctx.items.length > 0 && <hr></hr>}
      {ctx.items.length > 0 &&<div className={styles["cart-items__footer"]}> 
        <div><strong>Total Amount</strong></div>
        <div><strong>${ctx.totalAmount.toFixed(2)}</strong></div>
      </div>
      } 
    </Card>
  );
};

export default CartItems;
