import React from "react";
import Slider from "react-slick";
import LSection from '../../../../Layout/LSection/LSection';
import CardSlider from "./CardSlider/CardSlider";

import styles from './SectionTeam.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionTeam = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const viewTeam = team.map((person, i) => {
        return <CardSlider
            name={person.name}
            role={person.role}
            img={person.img}
            key={i}
        />
    });


    return (
        <LSection title='Наша команда'>
            <Slider {...settings} className={styles.container}>
                {viewTeam}
            </Slider>
        </LSection>
    )
}

export default SectionTeam;

var team = [
    { name: 'Илья Кашеваров', role: 'Руководитель компании', img: './images/Ilya.png' },
    { name: 'Игорь Кашеваров', role: 'Технический директор', img: './images/Igor.webp' },
    { name: 'Роман Жуков', role: 'Фронтенд разработчик', img: './images/Zhukov1.jpg' },
    { name: 'Василий Кашеваров', role: 'Аналитик BI', img: './images/Vasya.webp' },
    { name: 'Константин Куранов', role: 'Фронтенд разработчик', img: './images/Kostya.webp' },
    { name: 'Андрей Доценко', role: 'Аналитик разработчик', img: './images/Docenko.webp' },
    { name: 'Андрей Чернявский', role: 'Data Scientist', img: './images/Andrey.jpeg' },
]
