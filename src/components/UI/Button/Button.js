import React, { Fragment } from "react";
import styles from './Button.module.css'; 

const Button = (props) => {

    const onClickHanndler = () =>{
        props.onClick();
    }
    return <Fragment >
        <button className={styles['btn']} onClick={onClickHanndler}>{props.value}</button>
    </Fragment>
}

export default Button;