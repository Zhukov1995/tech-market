import React from 'react';
import LSection from '../../../../Layout/LSection/LSection';
import styles from './SectionAbout.module.css';

const SectionAbout = () => {
    return (
        <LSection title='О нас'>
            <div className={styles.section_content}>
                <p>Мы команда <a href='https://techpeople.ru/' target='_blank'>Techpeople</a>, команда которая занимается внедрением BI в ваш бизнес, а так же разработкой кастомных виджетов различной сложности.</p>
            </div>
        </LSection>
    )
}

export default SectionAbout;