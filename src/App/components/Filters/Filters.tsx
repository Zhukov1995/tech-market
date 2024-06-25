import React, { useEffect, useMemo, useState } from "react";
import styles from './Filters.module.css';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilterValueCategories, setFilterValueCompany, setFilterValuePlatform } from "../../store/filterSlice";
import Button from "../Button/Button";
import { IWidget } from "../../store/data";

const Filters = () => {
    const [categoryValue, setCategoryValue] = useState<string>('Категория');
    const [companyValue, setCompanyValue] = useState<string>('Компания');
    const [platformValue, setPlatformValue] = useState<string>('Платформа');
    const filters = useAppSelector(state => state.filters);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (categoryValue !== filters.categories) {
            setCategoryValue(filters.categories);
        };
        if (companyValue !== filters.company) {
            setCompanyValue(filters.company);
        };
        if (platformValue !== filters.platform) {
            setPlatformValue(filters.platform);
        };
    }, [])

    const widgets = useAppSelector(state => state.widgets.widgets);

    const categoryArr = useMemo(() => ['Категория', ...new Set(widgets.map((w: IWidget) => {
        return w.categories
    }))] as string[], [widgets]);

    const companyArr = useMemo(() => ['Компания', ...new Set(widgets.map((w: IWidget) => {
        return w.company
    }))] as string[], [widgets]);

    const platformArr = useMemo(() => ['Платформа', ...new Set(widgets.map((w: IWidget) => {
        return w.platform
    }))] as string[], [widgets]);


    const viewCategory = categoryArr.map((item: string, index: number) => {
        return <option value={item} key={index}>{item}</option>
    });

    const viewCompany = companyArr.map((item: string, index: number) => {
        return <option value={item} key={index}>{item}</option>
    });

    const viewPlatform = platformArr.map((item: string, index: number) => {
        return <option value={item} key={index}>{item}</option>
    });

    const handleChangeCategories = (e: any) => {
        setCategoryValue(e.target.value);
        dispatch(setFilterValueCategories(e.target.value));
    }

    const handleChangeCompany = (e: any) => {
        setCompanyValue(e.target.value);
        dispatch(setFilterValueCompany(e.target.value));
    }

    const handleChangePlatform = (e: any) => {
        setPlatformValue(e.target.value);
        dispatch(setFilterValuePlatform(e.target.value));
    }

    const resetFilters = () => {
        setCategoryValue('Категория');
        dispatch(setFilterValueCategories('Категория'));
        setCompanyValue('Компания');
        dispatch(setFilterValueCompany('Компания'));
        setPlatformValue('Платформа');
        dispatch(setFilterValuePlatform('Платформа'));
    }

    return (
        <div className={styles.filter_container}>
            <select
                name="company"
                id={styles.filter_company}
                className={styles.filter_select}
                value={companyValue}
                onChange={(e) => handleChangeCompany(e)}>
                {viewCompany}
            </select>
            <select
                name="platform"
                id={styles.filter_platform}
                className={styles.filter_select}
                value={platformValue}
                onChange={(e) => handleChangePlatform(e)}>
                {viewPlatform}
            </select>
            <select
                name="Категория"
                id={styles.filter_category}
                className={styles.filter_select}
                value={categoryValue}
                onChange={(e) => handleChangeCategories(e)}>
                {viewCategory}
            </select>
            <Button onClick={() => resetFilters()}>Сбросить</Button>
        </div>
    )
}

export default Filters;