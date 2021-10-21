import React,{useContext} from "react";
import styles from './CartItem.module.css';
import SquareButton from '../UI/Button/SquareButton';
import CartContext from "../context/cart-context";

const CartItem = (props) => {

  //const [dishQuantity,setDishQuantity] = useState(props.dishQuantity);

  const ctx=useContext(CartContext);

  const addClickHandler = () =>{
    // setDishQuantity((prevQuantity)=>{
    //   return (prevQuantity + 1);
    // });
     ctx.addItem({
        dishName:props.dishName,
        dishPrice:props.dishPrice,
        dishQuantity:1
      }
     );
     
  }

  const remomveClickHandler = () =>{
    ctx.removeItem({
        dishName:props.dishName,
        dishPrice:props.dishPrice,
        dishQuantity:props.dishQuantity-1
    });
    // setDishQuantity((prevQuanity)=>{
    //   return (prevQuanity - 1);
    // });
  }

  

  return (
    <div className={styles["cart-items"]}>
      <div className={styles["cart-item"]}>
        <div>
          <strong>{props.dishName}</strong>
        </div>
        <div className={styles["cart-item__details"]}>
          <div>
            <small>${props.dishPrice}</small>
          </div>
          <div>
            <strong>x <span>{props.dishQuantity}</span></strong>
          </div>
        </div>
      </div>
      <div>
        <SquareButton onRemove={remomveClickHandler}>-</SquareButton>
        <SquareButton onAdd={addClickHandler}>+</SquareButton>
      </div>
      </div>
  );
};

export default CartItem;
