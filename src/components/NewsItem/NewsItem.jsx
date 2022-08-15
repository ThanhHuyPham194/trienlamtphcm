import React from 'react';
import './NewsItem.scss';
export default function NewsItem({ img, children, date, ...rest }) {
    return (
        <div className='news-item' {...rest}>
            <div className="news-item__img">
                <img src={img} alt="news_image" />
            </div>
            <p className="news-item__name">
                {children}
            </p>
            <p className="news-item__date">
                Ngày đăng: <span>{date}</span>
            </p>
        </div>
    );
}
