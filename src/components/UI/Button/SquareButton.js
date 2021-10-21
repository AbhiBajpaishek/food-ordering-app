import React from "react";
import styles from './SquareButton.module.css';

const SquareButton =  (props) =>{
    const onClickHandler = (event) =>{
        event.preventDefault();
        props.onAdd ? props.onAdd() : props.onRemove();
        
    }
    return <button className={`${styles['square-btn']} ${props.className && props.className}`} onClick={onClickHandler}>{props.children}</button>
}

export default SquareButton;