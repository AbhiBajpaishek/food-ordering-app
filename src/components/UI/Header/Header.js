import React,{useState} from "react";
import styles from './Header.module.css';
import Cart from "../../Cart/Cart";
import CartItems from "../../Cart/CartItems";
import Modal from "../Modal";

const Header = () =>{

    const [showCart,setShowCart] = useState(false);

    const showCartHandler = () =>{
        setShowCart(true);
    }

    const hideCartHandler = () =>{
        setShowCart(false);
    }

    return <React.Fragment>
        <nav className={styles.navbar}>
           <div className = {styles['navbar-item']}>
                <strong>ReactMeals</strong>
           </div>
           <Cart onClick = {showCartHandler}></Cart>
           {showCart && <Modal onhideCartHandler ={hideCartHandler}>
            <CartItems onhideCartHandler ={hideCartHandler}></CartItems>                 
           </Modal>}
        </nav>
    </React.Fragment>
}

export default Header;