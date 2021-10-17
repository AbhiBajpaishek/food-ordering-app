import React from "react";
import Button from "../UI/Button/Button";
import styles from "./MenuItems.module.css";

const MenuItems = (props) => {
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
              value={1}
            ></input>
          </div>
        </div>
        <div>
            <Button value="+Add"></Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
