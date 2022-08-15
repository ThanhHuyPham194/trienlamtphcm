import { useState } from 'react';
import new5 from '../../assets/images/Home/news1.png';
import new6 from '../../assets/images/Home/news2.png';
import new7 from '../../assets/images/Home/news3.png';
import new8 from '../../assets/images/Home/news4.png';
import new9 from '../../assets/images/Home/news5.png';
import new10 from '../../assets/images/Home/news6.png';
import news1 from '../../assets/images/News/culture1.png';
import news2 from '../../assets/images/News/culture2.png';
import news3 from '../../assets/images/News/culture3.png';
import news4 from '../../assets/images/News/culture4.png';
import moreList1 from '../../assets/images/News/culture5.png';
import moreList2 from '../../assets/images/News/culture6.png';
import moreList3 from '../../assets/images/News/culture7.png';
import news11 from '../../assets/images/News/other1.png';
import news12 from '../../assets/images/News/other2.png';
import news13 from '../../assets/images/News/other3.png';
import news14 from '../../assets/images/News/other4.png';
import MainTitle from '../../components/MainTitle/MainTitle';
import NewsContent from '../../components/NewsContent/NewsContent';
import './index.scss';

import { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainButton from '../../components/MainButton/MainButton';
import NewsItem from '../../components/NewsItem/NewsItem';
export default function Culture() {
  const [isMore, setIsMore] = useState(false);
  const handleMore = () => {
    setIsMore(!isMore);
  };
  return (
    <div className='culture main-wrapper'>
      <div className="container">
        <MainTitle sub="news">Văn hóa</MainTitle>
        <div className="culture__wrapper">
          <NewsContent border={true} img={news1} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
            (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) </NewsContent>
          <NewsContent img={news2} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
            (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) </NewsContent>
          <NewsContent img={news3} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
            (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) </NewsContent>
          <NewsContent img={news4} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
            (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) </NewsContent>

          {isMore &&
            <NewsContent img={moreList1} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
              (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) </NewsContent>
          }
          {isMore &&
            <NewsContent img={moreList2} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
              (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022)
            </NewsContent>
          }
          {isMore &&
            <NewsContent img={moreList3} name="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh" date="Ngày 26/07/2022">
              (HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022)
            </NewsContent>
          }
        </div>
        <div className="culture__button">
          {isMore ?
            <MainButton down={`${isMore}`} onClick={handleMore}>Thu lại</MainButton>
            :
            <MainButton down={`${isMore}`} onClick={handleMore}>Xem thêm</MainButton>}
        </div>
        <div className="culture__relative">
          <div className="culture__relative--head">
            <h3>Tin tức khác</h3>
            <div className="button-group">
              <div className="prev"><svg width="7" height="10" viewBox="0 0 7 10" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.48918 1.52216L2.93363 5.00042L6.48918 8.47869L5.77807 9.86999L0.800293 5.00042L5.77807 0.130859L6.48918 1.52216Z" fillRule="#404040" />
              </svg>
              </div>
              <div className="next"><svg width="7" height="10" viewBox="0 0 7 10" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.48918 1.52216L2.93363 5.00042L6.48918 8.47869L5.77807 9.86999L0.800293 5.00042L5.77807 0.130859L6.48918 1.52216Z" fillRule="#404040" />
              </svg>
              </div>
            </div>
          </div>
          <Swiper className="culture__relative--wrapper" spaceBetween={50}
            modules={[Navigation]}
            slidesPerView={4} loop={true}
            navigation={
              {
                nextEl: '.culture__relative .next',
                prevEl: '.culture__relative .prev',
              }
            }
          >
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={new5}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={new6}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={new7}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={new8}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={new9}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={new10}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={news11}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={news12}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={news13}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem date="31/07/2022" img={news14}>Phát hành bộ ảnh triển lãm Kỷ niệm Ngày Giải phóng miền Nam, thống nhất đất nước và Ngày Quốc tế Lao động</NewsItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div >
  );
}
