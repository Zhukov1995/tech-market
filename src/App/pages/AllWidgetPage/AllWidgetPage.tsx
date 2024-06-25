import React, { useEffect, useMemo } from "react";
import styles from "./AllWidgetPage.module.css";
import AllWidgetsCard from "../../components/AllWidgetsCard/AllWidgetsCard";
import Filters from "../../components/Filters/Filters";
import { useAppSelector } from "../../store/hooks";
import { IWidget } from "../../store/data";

const AllWidgetPage = () => {
    const widgets = useAppSelector(state => state.widgets.widgets);
    const filterCategories = useAppSelector(state => state.filters.categories);
    const filterCompany = useAppSelector(state => state.filters.company);
    const filterPlatform = useAppSelector(state => state.filters.platform);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function filterData(data: IWidget[]) {
        let localData = [...data];
        if (filterCategories !== 'Категория') {
            localData = localData.filter(item => item.categories === filterCategories);
        }
        if (filterCompany !== 'Компания') {
            localData = localData.filter(item => item.company === filterCompany);
        }
        if (filterPlatform !== 'Платформа') {
            localData = localData.filter(item => item.platform === filterPlatform);
        }
        return localData
    }

    const viewAllWidgets = useMemo(() => filterData(widgets).map(widget => {
        return <AllWidgetsCard
            title={widget.title}
            company={widget.company}
            preview={widget.screen[0]}
            id={widget.id}
            key={widget.id}
        />
    }), [filterCategories, filterCompany, filterPlatform]);

    return (
        <>
            <Filters />
            <div className={styles.container}>
                {
                    viewAllWidgets.length ?
                        viewAllWidgets
                        :
                        <h2 className={styles.alert}>Тут пока пусто...</h2>
                }
            </div>
        </>
    )
}

export default AllWidgetPage;