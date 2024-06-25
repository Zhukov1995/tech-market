import React from "react";
import styles from './CardSlider.module.css';

interface IProps {
    name: string,
    role: string,
    img: string
}

const CardSlider = ({ name, role, img }: IProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.card}>
                <img src={img} alt={name} />
                <div className={styles.info}>
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSlider;