import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Navigation = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isBurger, setIsBurger] = useState<boolean>(false);

    function callbackStyle(isActive: boolean) {
        return {
            color: isActive ? "#FF9933" : "white",
        };
    }

    const styleBurgerMenu = window.innerWidth < 750 ? {
        display: !isBurger ? 'none' : 'flex'
    } : {}

    return (
        <nav className={styles.nav_wrapper}>
            <h2 className={styles.nav_logo}>Маркет виджетов</h2>
            <div className={styles.nav_link} style={styleBurgerMenu}>
                <span
                    className={styles.nav_link_item}
                    onClick={() => setIsBurger(false)}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => callbackStyle(isActive)}>
                        Главная
                    </NavLink>
                </span>
                <span
                    className={styles.nav_link_item}
                    onClick={() => setIsBurger(false)}>
                    <NavLink
                        to="/catalog"
                        style={({ isActive }) => callbackStyle(isActive)}>
                        Каталог
                    </NavLink>
                </span>
                <span
                    className={styles.nav_link_item}
                    onClick={() => setIsBurger(false)}>
                    <NavLink
                        to="/widgets"
                        style={({ isActive }) => callbackStyle(isActive)}>
                        Все виджеты
                    </NavLink>
                </span>
                <Button size='s' onClick={() => setIsModal(!isModal)}>Заказать виджет</Button>
                {isModal && <Modal setIsModal={setIsModal} title='Перезвоним в течении 15 минут' />}
            </div>
            <BurgerMenu open={isBurger} setIsOpen={setIsBurger} />
        </nav>
    )
}

export default Navigation;