import React from "react";
import "./GalleryHome.scss";
import MainTitle from "../../../../components/MainTitle/MainTitle";

import gallery1 from "../../../../assets/images/Home/gallery1.png";
import gallery2 from "../../../../assets/images/Home/gallery2.png";
import gallery3 from "../../../../assets/images/Home/gallery3.png";
import gallery4 from "../../../../assets/images/Home/gallery4.png";
import gallery5 from "../../../../assets/images/Home/gallery5.png";
import gallery6 from "../../../../assets/images/Home/gallery6.png";
import gallery7 from "../../../../assets/images/Home/gallery7.png";

import MainButton from "../../../../components/MainButton/MainButton";
import BorderGradient from "../../../../components/BorderGradient/BorderGradient";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useState } from "react";

export default function GalleryHome() {
  const [change, setChange] = useState(null);
  const [bannerGallery, setBannerGallery] = useState(gallery1);
  useEffect(() => {
    handleSlideActice();
  }, [change]);

  const handleSlideActice = () => {
    const activeSlide = document.querySelector(
      ".swiper-slide.swiper-gallery.swiper-slide-active"
    );
    let imageSlide;
    if (activeSlide) {
      imageSlide = activeSlide.firstChild;
    }
    setBannerGallery(imageSlide.src);
  };

  const slideChange = () => {
    setChange(!change);
  };

  const [compared, setCompared] = useState(0);
  const [distance, setDistance] = useState(0);
  const [width, setWidth] = useState(0);
  const handleTabs = (e) => {
    let id = e.target.dataset.id;
    setCompared(parseInt(id));
  };
  useEffect(() => {
    let listLi = document.querySelectorAll(".galleryHome li");
    listLi.forEach((e) => {
      let id = e.dataset.id;
      if (parseInt(id) === compared) {
        setDistance(e.offsetLeft);
        setWidth(e.offsetWidth);
      }
    });
  }, [compared]);
  return (
    <div className="galleryHome"  >
      <div className="main-wrapper">
        <MainTitle sub="GALLERY">Thư viện</MainTitle>

        <ul className="tab" data-aos="fade-up" data-aos-duration="1000">
          <li
            className={`${compared === 0 ? "item-active" : null}`}
            data-id={0}
            onClick={(e) => handleTabs(e)}
          >
            Triển lãm
          </li>
          <li
            className={`${compared === 1 ? "item-active" : null}`}
            data-id={1}
            onClick={(e) => handleTabs(e)}
          >
            Tranh cổ động
          </li>
          <li
            className={`${compared === 2 ? "item-active" : null}`}
            data-id={2}
            onClick={(e) => handleTabs(e)}
          >
            Ảnh thời sự
          </li>
          <li
            className={`${compared === 3 ? "item-active" : null}`}
            data-id={3}
            onClick={(e) => handleTabs(e)}
          >
            Câu lạc bộ nhiếp ảnh
          </li>
          <div className="line" style={{ left: distance + 'px', width: width + 'px' }}></div>

        </ul>
        <div className="content container" data-aos="fade-up" data-aos-duration="1000">
          <div className="content-left">
            <div className="content-left-desc">
              <h3>
                Triển lãm Thành phố Hồ Chí Minh khắc sâu <br /> đạo lý uống nước
                nhớ nguồn
              </h3>
              <span>
                Sinh thời, Chủ tịch Hồ Chí Minh đặc biệt quan tâm đến các chiến
                sĩ là thương binh, bệnh binh và thân nhân liệt sĩ. Người từng
                căn dặn: “Thương binh, bệnh binh, gia đình liệt sĩ là những
                người có công với Tổ quốc, với Nhân dân. Cho nên bổn phận chúng
                ta là phải biết ơn, phải yêu thương và giúp đỡ họ”. Ảnh: Chủ
                tịch Hồ Chí Minh viếng các anh hùng liệt sĩ và trích thư của Bác
                gửi đồng bào Nam bộ đăng trên Báo Cứu quốc vào ngày 10 tháng 3
                năm 1946.
              </span>
              <MainButton>Xem chi tiết</MainButton>
            </div>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              slideToClickedSlide
              onSlideChange={slideChange}
              loop
            >
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery1} alt="" />
                <BorderGradient />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery2} alt="" />
                <BorderGradient />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery3} alt="" />
                <BorderGradient />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery4} alt="" />
                <BorderGradient />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery5} alt="" />
                <BorderGradient />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery6} alt="" />
                <BorderGradient />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-gallery"
                style={{ position: "relative" }}
              >
                <img src={gallery7} alt="" />
                <BorderGradient />
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className="content-right"
            style={{ position: "relative", height: "100%" }}
          >
            <img src={bannerGallery} alt="" />

            <BorderGradient />
          </div>
        </div>
        <MainButton data-aos="fade-up" data-aos-duration="1000">Xem tất cả</MainButton>
      </div>
    </div>
  );
}
