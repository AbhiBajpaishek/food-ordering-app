import React from "react";
import styles from './Header.module.css';
import Cart from "../../Cart/Cart";

const Header = () =>{
    return <React.Fragment>
        <nav className={styles.navbar}>
           <div className = {styles['navbar-item']}>
                <strong>ReactMeals</strong>
           </div>
           <div>
                <Cart></Cart>
           </div>
        </nav>
    </React.Fragment>
}

export default Header;