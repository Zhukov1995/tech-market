import React from "react";
import styles from './NotFound.module.css';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2>Такой страницы не существует</h2>
                <Link to="/">Перейти на главную</Link>
            </div>
        </div>
    )
}

export default NotFound;