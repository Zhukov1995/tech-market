import React, { useEffect } from 'react';
import LSection from '../../Layout/LSection/LSection';
import Header from '../../components/Header/Header';
import SectionProduct from './Sections/SectionProduct/SectionProduct';
import SectionNotFound from './Sections/SectionNotFound/SectionNotFound';
import SectionAbout from './Sections/SectionAbout/SectionAbout';
import SectionTeam from './Sections/SectionTeam/SectionTeam';
import SectionDevWidget from './Sections/SectionDevWidget/SectionDevWidget';

import styles from './MainPage.module.css';
import SectionWhyMe from './Sections/SectionWhyMe/SectionWhyMe';
import SectionForm from './Sections/SectionForm/SectionForm';

const MainPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.main_page}>
            <Header />
            <SectionProduct />
            <SectionNotFound />
            <SectionAbout />
            <SectionTeam />
            <SectionDevWidget />
            {/* <SectionWhyMe /> */}
            <SectionForm />
        </div>
    )
}

export default MainPage;