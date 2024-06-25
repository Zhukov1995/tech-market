import React, { useState } from 'react';
import LSection from '../../../../Layout/LSection/LSection';
import styles from './SectionNotFound.module.css';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';

const SectionNotFound = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    return (
        <LSection title='Не нашли подходящий виджет ?'>
            <div className={styles.section_content}>
                <p>Мы готовы обсудить и разработать для вас виджет любой сложности.</p>
                <Button size='m' onClick={() => setIsModal(!isModal)}>Обсудить идею</Button>
            </div>
            {isModal && <Modal setIsModal={setIsModal} title='Обсудим вашу идею' />}
        </LSection>
    )
}

export default SectionNotFound;