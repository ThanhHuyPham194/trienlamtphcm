import React from 'react';
import ContactItem from '../../../../components/ContactItem/ContactItem';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import './ContactHome.scss';
export default function ContactHome() {
    return (
        <section className='contact-home'>
            <MainTitle sub="contact">Liên hệ</MainTitle>
            <div className="contact-home__wrapper">
                <div className="main-wrapper">
                    <ContactItem />
                </div>
            </div>
        </section>
    );
}
