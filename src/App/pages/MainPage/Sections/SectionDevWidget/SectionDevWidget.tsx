import React from 'react';
import LSection from '../../../../Layout/LSection/LSection';
import styles from './SectionDevWidget.module.css';

const SectionDevWidget = () => {
    return (
        <LSection title='Разрабатываем виджеты'>
            <div className={styles.section_flex}>
                <div className={styles.section_flex_item}>
                    <span>Visiology</span>
                </div>
                <div className={styles.section_flex_item}>
                    <span>Apache Superset</span>
                </div>
            </div>
        </LSection>
    )
}

export default SectionDevWidget;