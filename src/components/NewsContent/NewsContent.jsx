import React from 'react';
import BorderGradient from '../BorderGradient/BorderGradient';
import MainButton from '../MainButton/MainButton';
import './NewsContent.scss';
export default function NewsContent({ img, date, name, border, children }) {
  return (
    <div className='news-content' data-aos="zoom-in" data-aos-duration="800"  data-aos-anchor-placement="bottom-bottom">
      <div className="news-content__img">
        <img src={img} alt="news_image" />
      </div>
      <div className="news-content__wrapper">
        <div className="date">{date}</div>
        <h2>{name}</h2>
        <div className="content">{children}</div>
        <MainButton>Xem chi tiết</MainButton>
        {border && <BorderGradient />}
      </div>
    </div>
  );
}
