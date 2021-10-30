import React, {useState,useContext} from "react";
import Button from "../UI/Button/Button";
import styles from "./MenuItems.module.css";
import CartContext from "../context/cart-context";

const MenuItems = (props) => {

  const [quantity,setQuantity] = useState(1);

  const quantityChangeHandler = (event) =>{
      setQuantity(Number(event.target.value));
  }

  const ctx=useContext(CartContext);
  const addClickHandler = () =>{
     ctx.addItem({
       dishName:props.dishName,
       dishPrice:props.dishPrice,
       dishQuantity:quantity
     })
     setQuantity(1);
  }

  return (
    <div className={styles["menu-item"]} > 
      <div className={styles["menu-item__details"]}>
        <div>
          <strong>{props.dishName}</strong>
        </div>
        <div>
          <small>
            <i>{props.dishTitle}</i>
          </small>
        </div>
        <div className={styles["menu-item__details-price"]}>
          <strong>${props.dishPrice}</strong>
        </div>
      </div>
      <div className={`${styles["menu-item__details"]} ${styles["action"]}`}>
        <div className={styles["menu-item__details-actions"]}>
          <div>
            <strong>Amount </strong>
          </div>
          <div>
            <input
              type="number"
              className={styles["menu-item__details-actions__quantity"]}
              value={quantity}
              min="1"
              max="5"
              onChange={quantityChangeHandler}
            ></input>
          </div>
        </div>
        <div>
            <Button value="+Add" onClick = {addClickHandler}></Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
