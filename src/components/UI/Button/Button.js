import React, { Fragment } from "react";
import styles from './Button.module.css'; 

const Button = (props) => {

    const onClickHanndler = (e) =>{
        props.onClick(e);
    }
    return <Fragment >
        <button type={props.type ? props.type : "button"} className={styles['btn']} onClick={onClickHanndler}>{props.value}</button>
    </Fragment>
}

export default Button;