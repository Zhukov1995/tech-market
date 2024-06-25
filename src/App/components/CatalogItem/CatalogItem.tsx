import React from "react";
import Slider from "react-slick";

import styles from './CatalogItem.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatalogItemCard from "./CatalogItemCard/CatalogItemCard";
import { Link } from "react-router-dom";
import { IWidget } from "../../store/data";
import { useAppDispatch } from "../../store/hooks";
import { setFilterValueCategories } from "../../store/filterSlice";

interface IProps {
    title: string,
    widgets: IWidget[]
}

const CatalogItem = ({ title, widgets }: IProps) => {
    const dispatch = useAppDispatch();

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const viewCatalog = widgets.map(widget => {
        return <CatalogItemCard
            title={widget.title}
            company={widget.company}
            preview={widget.screen[0]}
            id={widget.id}
            key={widget.id}
        />
    });

    return (
        <div className={styles.catalog_item}>
            <h3 className={styles.catalog_item_title}>{title}</h3>
            <span onClick={() => dispatch(setFilterValueCategories(title))}>
                <Link to="/widgets">Подробнее ›</Link>
            </span>
            <Slider {...settings} className={styles.container}>
                {viewCatalog}
            </Slider>
        </div>
    )
}

export default CatalogItem;