import React, { useEffect, useState } from "react";
import styles from "./WidgetPage.module.css";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import SliderCatalogItem from "../../components/SliderCatalogItem/SliderCatalogItem";
import { useAppSelector } from "../../store/hooks";
import { IWidget } from "../../store/data";

const WidgetPage = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isSliderModal, setIsSliderModal] = useState<boolean>(false);
    const [widget, setWidget] = useState<IWidget>();
    const widgets = useAppSelector(state => state.widgets.widgets);
    const activeId = useAppSelector(state => state.widgets.activeWidgetId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const targetWidget = widgets.filter(el => el.id === activeId)[0];
        setWidget(targetWidget);
    }, []);

    let images = widget?.screen.map((item, index) => {
        return <div key={index} onClick={() => setIsSliderModal(true)}>
            <img src={item} alt="test" />
        </div>
    })

    return (
        <div className={styles.widget}>
            <div className={styles.media}>
                <iframe className={styles.media_video} src="https://www.youtube.com/embed/BvOkZ7f9Vho" title="Обзор сервиса Superset для визуализации данных | Аналитическая среда" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className={styles.media_screen}>
                    {images}
                </div>
                <Button className={styles.btn} size='m' width={true}>Тест драйв виджета</Button>
            </div>
            <div className={styles.body}>
                <div className={styles.body_section}>
                    <h3>Название виджета:</h3>
                    <p>{widget?.title}</p>
                </div>
                <div className={styles.body_section}>
                    <h3>Компания поставщик:</h3>
                    <p>{widget?.company}</p>
                </div>
                <div className={styles.body_section}>
                    <h3>Описание:</h3>
                    <p>{widget?.description}</p>
                </div>
                <div className={styles.body_section}>
                    <h3>Кейсы:</h3>
                    <p>{widget?.cases}</p>
                </div>
                <div className={styles.body_section}>
                    <h3>Сроки внедрения:</h3>
                    <p>{widget?.deadline}</p>
                </div>
                <div className={styles.body_section}>
                    <h3>Для платформы:</h3>
                    <p>{widget?.platform}</p>
                </div>
                <div className={styles.body_section}>
                    <h3>Стоимость:</h3>
                    <p className={styles.price}>{widget?.price}</p>
                </div>
                <Button
                    className={styles.btn_buy}
                    onClick={() => setIsModal(!isModal)}
                    size='m'
                    width={true}>Купить виджет</Button>
                {isModal
                    &&
                    <Modal
                        setIsModal={setIsModal}
                        btnCancel={false}
                        title='Запрос на покупку'
                        widgetName={widget?.title}
                        widgetCompany={widget?.company}
                        type='buy' />}
            </div>
            {isSliderModal && <SliderCatalogItem setIsModal={setIsSliderModal} images={widget?.screen as string[]} />}
        </div >
    )
}

export default WidgetPage;

