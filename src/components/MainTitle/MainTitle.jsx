import React from 'react';
import './MainTitle.scss';
export default function MainTitle({ children, sub }) 
{


    return (
        <div className='main-title'  >
            <h2 data-aos="zoom-out" data-aos-duration="1000" className='childrenTitle'>{children}</h2>
            <p data-aos="aosappear" data-aos-duration="1000" data-aos-delay="500">{sub}</p>

        </div>
    );
}
