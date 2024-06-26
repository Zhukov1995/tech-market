import React from "react";
import styles from './CatalogItemCard.module.css';
import { Link } from "react-router-dom";

interface IProps {
    title: string,
    company: string,
    preview: string,
    id: number
}

const CatalogItemCard = ({ title, company, preview, id }: IProps) => {

    return (
        <Link to={"/widget/" + id}>
            <div className={styles.item}>
                <div className={styles.card}>
                    <img src={preview} alt={title} />
                    <div className={styles.info}>
                        <h2>{title}</h2>
                        <p>{company}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CatalogItemCard;