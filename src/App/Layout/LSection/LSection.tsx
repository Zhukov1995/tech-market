import React from 'react';
import styles from './LSection.module.css';

interface IProps {
    title: string
    children: React.ReactNode
}

const LSection = ({ title, children }: IProps) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.section_title}>{title}</h2>
            <div className={styles.section_content}>{children}</div>
        </section>
    )
}

export default LSection;