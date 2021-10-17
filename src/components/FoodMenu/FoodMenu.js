import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import Card from "../UI/Card/Card";
import styles from "./FoodMenu.module.css";

const DUMMYMENUITEM = [
  {
    dishName: "Sushi",
    dishTitle: "Finest fish and veggies",
    dishPrice: 22.29,
  },
  {
    dishName: "Barbecue Burger",
    dishTitle: "American raw, meaty",
    dishPrice: 12.33,
  },
  {
    dishName: "Green bowl",
    dishTitle: "Healthy.. and green",
    dishPrice: 9.99,
  },
];

const FoodMenu = () => {
  const menuItems = DUMMYMENUITEM;

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
