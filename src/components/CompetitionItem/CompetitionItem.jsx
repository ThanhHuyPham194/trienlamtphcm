import React from 'react';
import MainButton from '../MainButton/MainButton';
import './CompetitionItem.scss';
export default function CompetitionItem({ from, to, children, img, delay }) {
    return (
        <div className='competition-item' data-aos="fade-down" data-aos-duration="1000">
            <div className="competition-item__date">
                <p>{from}</p>
                <p>{to}</p>
            </div>
            <div className="competition-item__name">
                <p>{children}</p>
            </div>
            <div className='competition-item__img'>
                <div className="overlay" style={{
                    animationDelay: delay + 's'
                }}></div>
                <img src={img} alt="image_competition" />
            </div>
            <div className="competition__button">
                <MainButton>Xem chi tiết</MainButton>
            </div>
        </div>
    );
}
