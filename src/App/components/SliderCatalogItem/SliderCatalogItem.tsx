import React from "react";
import Slider from "react-slick";
import styles from './SliderCatalogItem.module.css';
import { createPortal } from "react-dom";

interface IProps {
    setIsModal: (isModal: boolean) => void
    images: string[]
}

const SliderCatalogItem = ({ setIsModal, images }: IProps) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const modalNode = document.getElementById('portal_modal');

    if (!modalNode) {
        throw new Error('PORTAL_ERROR');
    }

    const viewImages = images.map((image, index) => {
        return <div key={index}>
            <img src={image} alt="image" />
        </div>
    })

    return (
        createPortal(
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <Slider {...settings}>
                        {viewImages}
                    </Slider>
                    <button
                        onClick={() => setIsModal(false)}
                        className={styles.btn_close}>×</button>
                </div>
            </div>,
            modalNode
        )
    )
}

export default SliderCatalogItem;