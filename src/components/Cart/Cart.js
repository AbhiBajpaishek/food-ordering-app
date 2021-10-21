import React,{useContext} from "react";
import styles from "./Cart.module.css";
import cartLogo from "../../Images/cart-plus-solid.svg";
import CartContext from "../context/cart-context";

const Cart = (props) => {

  const cartCtx= useContext(CartContext);
  const itemsQuantity= cartCtx.items.reduce((currValue, item)=>{
    return currValue + item.dishQuantity;
  },0);
  return (
    <div className={styles.cart} onClick={props.onClick}>
      <img src={cartLogo} alt="Loading" />
      <span> Your Cart</span>
      <label>{itemsQuantity}</label>
    </div>
  );
};

export default Cart;
