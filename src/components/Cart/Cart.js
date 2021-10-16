import React from "react";
import styles from "./Cart.module.css";
import cartLogo from "../../Images/cart-plus-solid.svg";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <img src={cartLogo} alt="Loading" />
      <span> Your Cart</span>
      <label>{5}</label>
    </div>
  );
};

export default Cart;
