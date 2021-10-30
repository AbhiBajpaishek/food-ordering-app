import React, { useState,useEffect } from "react";
import MenuItems from "../MenuItems/MenuItems";
import Card from "../UI/Card/Card";
import styles from "./FoodMenu.module.css";

const FoodMenu = () => {
  const [menuItems,setMenuItems] = useState([]);

  useEffect(()=>{
    fetch('https://food--ordering-default-rtdb.firebaseio.com/menu.json').then((response) => {
      return response.json();
    }).then((data) => {
        const items = [];
        Object.keys(data).map(key => items.push(data[key]))
        setMenuItems(items);
    }).catch((err) => console.log(err));
  },[])

  return (
    <Card className={styles["menu-items"]}>
      {menuItems.map((menuItem, index) => (
        <React.Fragment key={index}>
          <MenuItems            
            dishTitle={menuItem.dishTitle}
            dishName={menuItem.dishName}
            dishPrice={menuItem.dishPrice}
          ></MenuItems>
          <hr></hr>
        </React.Fragment>
      ))}
    </Card>
  );
};

export default FoodMenu;
