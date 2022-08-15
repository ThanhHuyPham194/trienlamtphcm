import React from "react";
import MainTitle from "../../../../components/MainTitle/MainTitle";
import "./Featured.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import slider1 from "../../../../assets/images/Home/feature1-1.png";
import slider2 from "../../../../assets/images/Home/feature1-2.png";
import slider3 from "../../../../assets/images/Home/feature1-3.png";
import feature2 from "../../../../assets/images/Home/feature2.png";
import feature3 from "../../../../assets/images/Home/feature3.png";
import BorderGradient from "../../../../components/BorderGradient/BorderGradient";
import MainButton from "../../../../components/MainButton/MainButton";


SwiperCore.use([Pagination]);
export default function Featured() {
  return (
    <div className="featured">  
      <div className="main-wrapper">
        <MainTitle sub="FEATURED">Nổi bật</MainTitle>
        <div className="list container"  data-aos="fade-up" data-aos-duration="1000">
          <div className="list-left">
            <div className="list-item">
              <Swiper spaceBetween={50} slidesPerView={1} pagination loop>
                <SwiperSlide>
                  <div style={{position: "relative", height:"100%"}}>
                  <img src={slider1} alt="" />
                  </div>
                  <BorderGradient/>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{position: "relative", height:"100%"}}>
                  <img src={slider2} alt="" />
                  </div>
                  <BorderGradient/>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{position: "relative", height:"100%"}}>
                  <img src={slider3} alt="" />
                  </div>
                  <BorderGradient/>
                </SwiperSlide>
               
              </Swiper>
              <div className="list-item-desc">
                <h2>
                  TRAO GIẢI TÁC PHẨM VĂN HỌC, <br />
                  NGHỆ THUẬT VỀ ĐỀ TÀI PHÒNG CHỐNG COVID-19
                </h2>
                <span>Ngày đăng: 31/07/2022</span>
              </div>
            </div>
          </div>
          <div className="list-right">
                <div className="list-right-item">
                  <img src={feature2} alt="" />
                </div>
                <div className="list-right-item">
                <img src={feature3} alt="" />

                </div>

          </div>
        </div>
        <MainButton data-aos="fade-up" data-aos-duration="1000">Xem tất cả</MainButton>
      </div>
    </div>
  );
}
