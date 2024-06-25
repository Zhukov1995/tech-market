import React, { useEffect, useMemo } from "react";
import styles from './CatalogPage.module.css';
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { useAppSelector } from "../../store/hooks";
import { IWidget } from "../../store/data";

const CatalogPage = () => {
    const widgets = useAppSelector(state => state.widgets.widgets);

    const categoryArr = useMemo(() => new Set(widgets.map((catalog: IWidget) => {
        return catalog.categories
    })) as Set<string>, [widgets]);

    const widgetsArr = useMemo(() => [...categoryArr].map(category => {
        return widgets.filter((widget: IWidget) => widget.categories === category);
    }), [categoryArr]);

    const viewCategory = useMemo(() => widgetsArr.map((widgetArr, i) => {
        return <CatalogItem title={widgetArr[0].categories} widgets={widgetArr} key={i} />
    }),
        [widgetsArr]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.catalog_page}>
            {viewCategory}
        </div>
    )
}

export default CatalogPage;