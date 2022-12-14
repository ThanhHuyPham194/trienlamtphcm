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
        <MainTitle sub="GALLERY">Th?? vi???n</MainTitle>

        <ul className="tab" data-aos="fade-up" data-aos-duration="1000">
          <li
            className={`${compared === 0 ? "item-active" : null}`}
            data-id={0}
            onClick={(e) => handleTabs(e)}
          >
            Tri???n l??m
          </li>
          <li
            className={`${compared === 1 ? "item-active" : null}`}
            data-id={1}
            onClick={(e) => handleTabs(e)}
          >
            Tranh c??? ?????ng
          </li>
          <li
            className={`${compared === 2 ? "item-active" : null}`}
            data-id={2}
            onClick={(e) => handleTabs(e)}
          >
            ???nh th???i s???
          </li>
          <li
            className={`${compared === 3 ? "item-active" : null}`}
            data-id={3}
            onClick={(e) => handleTabs(e)}
          >
            C??u l???c b??? nhi???p ???nh
          </li>
          <div className="line" style={{ left: distance + 'px', width: width + 'px' }}></div>

        </ul>
        <div className="content container" data-aos="fade-up" data-aos-duration="1000">
          <div className="content-left">
            <div className="content-left-desc">
              <h3>
                Tri???n l??m Th??nh ph??? H??? Ch?? Minh kh???c s??u <br /> ?????o l?? u???ng n?????c
                nh??? ngu???n
              </h3>
              <span>
                Sinh th???i, Ch??? t???ch H??? Ch?? Minh ?????c bi???t quan t??m ?????n c??c chi???n
                s?? l?? th????ng binh, b???nh binh v?? th??n nh??n li???t s??. Ng?????i t???ng
                c??n d???n: ???Th????ng binh, b???nh binh, gia ????nh li???t s?? l?? nh???ng
                ng?????i c?? c??ng v???i T??? qu???c, v???i Nh??n d??n. Cho n??n b???n ph???n ch??ng
                ta l?? ph???i bi???t ??n, ph???i y??u th????ng v?? gi??p ????? h??????. ???nh: Ch???
                t???ch H??? Ch?? Minh vi???ng c??c anh h??ng li???t s?? v?? tr??ch th?? c???a B??c
                g???i ?????ng b??o Nam b??? ????ng tr??n B??o C???u qu???c v??o ng??y 10 th??ng 3
                n??m 1946.
              </span>
              <MainButton>Xem chi ti???t</MainButton>
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
        <MainButton data-aos="fade-up" data-aos-duration="1000">Xem t???t c???</MainButton>
      </div>
    </div>
  );
}
