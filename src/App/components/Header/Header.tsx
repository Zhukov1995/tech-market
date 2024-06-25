import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1 className={styles.title_title}>Маркет виджетов</h1>
                <p className={styles.title_subtitle}>Место, где встречаются поставщики и клиенты</p>
                <Link to="/catalog">Перейти в каталог</Link>
            </div>
        </header>
    )
}

export default Header;