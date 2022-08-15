import React from 'react'
import MainButton from '../../../../components/MainButton/MainButton';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import './AboutUs.scss';
import aboutImg from '../../../../assets/images/Home/about.jpg';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import BorderGradient from '../../../../components/BorderGradient/BorderGradient';

export default function AboutUs() {

    function numberWithDots(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
    }
    const countNumber= useRef();
    useEffect(()=>{
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
             current = start,
             range = end - start,
             increment = end > start ? 1 : -1,
             step = Math.abs(Math.floor(duration / range)),
             timer = setInterval(() => {
              current += increment;
              obj.textContent = numberWithDots(current);
              if (current === end) {
               clearInterval(timer);
              }
             }, step);
           }


           const observer= new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                counter("year", 1580, 1980, 500);             
                counter("follower", 1714125, 1714525, 500);          
                counter("yearfoundation", 0, 40, 1300);          

            }
           },{threshold:0});
           observer.observe(countNumber.current);
    },[])

  return (
    <div className='aboutUs'>
        <div className="main-wrapper">
            <MainTitle sub="ABOUT US">Giới thiệu</MainTitle>
            <div className="about" data-aos="fade-up" data-aos-duration="1000">
                <div className="aboutImage" style={{position: "relative"}}>

                <img src={aboutImg} alt="" className="about-image" />
                <BorderGradient></BorderGradient>
                </div>
                <div className="about-info">
                    <h2>TRUNG TÂM THÔNG TIN TRIỄN LÃM</h2>
                    <p>Trung tâm Thông tin Triển lãm là đơn vị sự nghiệp trực thuộc Sở Văn hóa và Thể thao Thành phố Hồ Chí Minh có chức năng tham mưu cho Ban Giám đốc Sở để quản lý, tổ chức các hoạt động thuộc lĩnh vực thông tin, tuyên truyền cổ động, phổ biến chủ trương, đường lối của Đảng, pháp luật của Nhà nước, thực hiện các nhiệm vụ chính trị, kinh tế, xã hội của Thành phố, ...</p>
                    <Link to="about/history">
                    <MainButton>Xem chi tiết</MainButton>
                    </Link>
                </div>
             
            </div>
            <div className="number" ref={countNumber}>
                    <div className="number-item" >
                        <span  id="year"></span> 
                        <p>Lịch sử hình thành lâu đời</p>
                    </div>
                    <div className="number-item">
                        <span id="follower" ></span>
                        <p>Lịch sử hình thành lâu đời</p>
                    </div>
                    <div className="number-item">
                        <span id="yearfoundation" className='follower'>+</span>
                        <p>Lịch sử hình thành lâu đời</p>
                    </div>
                 
                </div>
        </div>
    </div>
  )
}
