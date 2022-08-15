import React from 'react';
import arrow from '../../assets/icons/arrow.svg';
import arrow_down from '../../assets/icons/arrow-down.svg';
import './MainButton.scss';
export default function MainButton({ down, children, ...rest }) {
    return (
        <div className={`main-button ${down ? 'options' : ''} ${down === 'true' ? 'shorten' : ''}`} {...rest} data-aos="flip-down" data-aos-duration="1000">
            <p>{children}</p>
            <div className='img'>
                {down ? <img src={arrow_down} alt="arrow_svg" /> : <img src={arrow} alt="arrow_svg" />}
                {/* <img src={arrow} alt="arrow_svg" /> */}
            </div>
            <div className="main-button__line"></div>
        </div>
    );
}
