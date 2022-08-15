import React, { useEffect, useState } from 'react';
import news1 from '../../../../assets/images/Home/news1.png';
import news2 from '../../../../assets/images/Home/news2.png';
import news3 from '../../../../assets/images/Home/news3.png';
import news4 from '../../../../assets/images/Home/news4.png';
import news5 from '../../../../assets/images/News/other1.png';
import news6 from '../../../../assets/images/News/other2.png';
import news7 from '../../../../assets/images/News/other3.png';
import news8 from '../../../../assets/images/News/other4.png';
import MainButton from '../../../../components/MainButton/MainButton';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import NewsItem from '../../../../components/NewsItem/NewsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import './NewsHome.scss';
import { useNavigate } from 'react-router-dom';
export default function NewsHome() {
    const navigate = useNavigate();
    const [compared, setCompared] = useState(0);
    const [distance, setDistance] = useState(0);
    const [width, setWidth] = useState(0);
    const handleTabs = (e) => {
        let id = e.target.dataset.id;
        setCompared(parseInt(id));
    };
    useEffect(() => {
        let listLi = document.querySelectorAll('.news-home__options li');
        listLi.forEach(e => {
            let id = e.dataset.id;
            if (parseInt(id) === compared) {
                setDistance(e.offsetLeft);
                setWidth(e.offsetWidth);
            }
        });
    }, [compared]);
    return (
        <section className='news-home main-wrapper'>
            <div className="container">
                <MainTitle sub="news">Tin tức</MainTitle>
                <ul className="news-home__options"  data-aos="fade-up" data-aos-duration="1000">
                    <li className={`${compared === 0 ? 'active' : null}`}
                        data-id={0} onClick={(e) => handleTabs(e)}
                    >Văn Hóa</li>
                    <li className={`${compared === 1 ? 'active' : null}`}
                        data-id={1} onClick={(e) => handleTabs(e)}
                    >Thể Thao</li>
                    <li className={`${compared === 2 ? 'active' : null}`}
                        data-id={2} onClick={(e) => handleTabs(e)}
                    >Du lịch</li>
                    <div className="line" style={{ left: distance + 'px', width: width + 'px' }}></div>
                </ul>
                <div className="news-home__wrapper"  data-aos="fade-up" data-aos-duration="1000" >
                    <Swiper
                        spaceBetween={22}
                        slidesPerView={4}
                        loop
                    >
                        <SwiperSlide>
                            <NewsItem img={news1} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news2} date="31/07/2022">Triển lãm cần giờ - 40 năm xây dựng và phát triển</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news3} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news4} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news5} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news6} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news7} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsItem img={news8} date="31/07/2022">Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className="news-home__button">
                    <MainButton onClick={() => navigate('/information/culture')}> Xem tất cả</MainButton>
                </div>
            </div>
        </section >
    );
}
