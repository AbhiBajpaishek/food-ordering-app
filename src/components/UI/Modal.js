import React from "react";
import ReactDOM from "react-dom";
import styles from '../UI/Modal.module.css';

const Overlay = (props) => {
    return <div className={styles.overlay}> {props.children}</div>
} 

const Backdrop = (props) => {
    return <div className = {styles.backdrop} onClick={props.onClick}>
    </div>
}

const Modal = (props) => {
    return <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onhideCartHandler}></Backdrop>,document.getElementById('myModal'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('myModal'))}
        </>
}

export default Modal;