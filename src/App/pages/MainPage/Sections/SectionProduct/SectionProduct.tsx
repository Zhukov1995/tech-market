import React from 'react';
import LSection from '../../../../Layout/LSection/LSection';
import styles from './SectionProduct.module.css';

const SectionProduct = () => {
    return (
        <LSection title='О продукте'>
            <div className={styles.section_content}>
                <p>Маркет виджетов - это BI маркетплейс, в котором компании могут размещать свои виджеты, а клиенты могут приобретать их для себя.</p>
            </div>
        </LSection>
    )
}

export default SectionProduct;