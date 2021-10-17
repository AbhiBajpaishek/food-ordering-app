import React, { Fragment } from "react";
import styles from './Button.module.css'; 

const Button = (props) => {
    return <Fragment >
        <button className={styles['btn']}>{props.value}</button>
    </Fragment>
}

export default Button