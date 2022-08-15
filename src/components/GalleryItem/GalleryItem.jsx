import React from 'react'
import './GalleryItem.scss';

export default function GalleryItem({dateStart, dateEnd, title, content,srcImage}) {
  return (
    <div className='galleryItem'>
        <div className="date">
            <span className="date-start">{dateStart} -</span>
            <span className="date-end">{dateEnd}</span>

        </div>
        <div className="lineCircle">
        <div className="circle" data-aos="fade-up" data-aos-duration="1000"  data-aos-anchor-placement="bottom-bottom">
            </div>
            <div className="vector">

        </div>
        </div>
        <div className="content">
            <div className="content-left">
            <h1 className='content-left-title'>{title}</h1>
            <span>{content}</span>

            </div>
            <div className="img">
            <img src={srcImage} alt="" className="content-right" />
            </div>
        </div>
    </div>
  )
}
