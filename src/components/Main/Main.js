import React from "react";
import FoodMenu from "../FoodMenu/FoodMenu";
import Card from "../UI/Card/Card";
import styles from './Main.module.css'; 

const Main = () =>{

    return <main>
            <div className={styles.image}></div>
            <Card className= {styles.banner}>
                <h1>Delicious Food, Delivered to you</h1>
                <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All meals are cooked with high quality ingredients, just-in-time and ofcourse by experienced chefs!</p>
            </Card>
            <div className={styles["food-menu"]}>
            <FoodMenu ></FoodMenu>
            
            </div>
    </main>
}

export default Main;