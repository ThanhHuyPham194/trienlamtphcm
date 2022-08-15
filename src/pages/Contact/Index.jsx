import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import MainTitle from '../../components/MainTitle/MainTitle';

import phone from '../../assets/icons/phone.svg';
import map from '../../assets/icons/map.svg';
import mail from '../../assets/icons/mail.svg';
import './index.scss';
export default function Contact() {
  return (
    <div className="contact">
     
  
        <MainTitle sub="contact">Liên hệ</MainTitle>
        <div className="contact__wrapper">
          <ContactItem />
        </div>
        <div className="contact__title main-wrapper container">
          <h3 className="sub-title" data-aos="fade-up" data-aos-duration="1000">
            Thông tin liên hệ
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000">Trang Thông tin Điện tử - Trung tâm Thông tin Triển lãm Thành phố Hồ Chí Minh</p>
          <p data-aos="fade-up" data-aos-duration="1000">Trưởng Ban Biên tập: <span>Nhà báo Trà Đức Khang</span></p>
        </div>
        <div className="contact__info main-wrapper container">
          <div className="group" data-aos="fade-up" data-aos-duration="1000">
            <img src={phone} alt="icon_svg" />
            <p className="name">Số điện thoại</p>
            <p className="text">028 3930 2159</p>
            <p className="text">028 39301732</p>
          </div>
          <div className="group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <img src={map} alt="icon_svg" />
            <p className="name">Địa chỉ</p>
            <p className="text">178 Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh</p>
          </div>
          <div className="group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"> 
            <img src={mail} alt="icon_svg" />
            <p className="name">email</p>
            <p className="text">thuongtrucweb@hiec.org.vn</p>
          </div>
        </div>
        <div className="contact__map">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.3172104778652!2d106.69385812104512!3d10.780269603935578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4077edf9b7%3A0xc41834041e461f47!2zVHJ1bmcgVMOibSBUaMO0bmcgVGluIFRyaeG7g24gTMOjbSBUcC5IQ00!5e0!3m2!1svi!2s!4v1660202572638!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
  );
}
