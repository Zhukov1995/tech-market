import React from "react";
import styles from './BurgerMenu.module.css';
import { IProps } from "./interface";


const BurgerMenu = ({ open, setIsOpen }: IProps) => {

    const stylesChild1 = {
        transform: open ? "rotate(45deg)" : "rotate(0)",
        background: open ? "#ff7c1d" : "#EFFFFA"
    }

    const stylesChild2 = {
        opacity: open ? "0" : "1",
        transform: open ? "translateX(20px)" : "translateX(0)",
        background: open ? "#ff7c1d" : "#EFFFFA"

    }

    const stylesChild3 = {
        transform: open ? "rotate(-45deg)" : "rotate(0)",
        background: open ? "#ff7c1d" : "#EFFFFA"
    }

    return (
        <button className={styles.burger} onClick={() => setIsOpen(!open)}>
            <div style={stylesChild1} className={styles.burger_line} />
            <div style={stylesChild2} className={styles.burger_line} />
            <div style={stylesChild3} className={styles.burger_line} />
        </button>
    );
};

export default BurgerMenu;