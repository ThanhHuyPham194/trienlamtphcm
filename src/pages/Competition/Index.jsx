import React, { useState } from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import './index.scss';
import banner from '../../assets/images/DetailCompetition/banner.png';
import competition1 from '../../assets/images/Home/competition1.png';
import competition2 from '../../assets/images/DetailCompetition/competition2.png';
import competition3 from '../../assets/images/DetailCompetition/competition3.png';
import competition4 from '../../assets/images/DetailCompetition/competition4.png';
import competition5 from '../../assets/images/DetailCompetition/competition5.png';
import competition6 from '../../assets/images/DetailCompetition/competition6.png';
import competition7 from '../../assets/images/DetailCompetition/competition7.png';
import CompetitionItem from '../../components/CompetitionItem/CompetitionItem';
import MainButton from '../../components/MainButton/MainButton';
import BorderGradient from '../../components/BorderGradient/BorderGradient';
export default function Competition() {
  const [isMore, setIsMore] = useState(false);
  const handleMore = () => {
    setIsMore(!isMore);
  };
  return (
    <div className='competition main-wrapper'>
      <MainTitle sub="competition">Cuộc thi</MainTitle>
      <div className="container">
        <div className="competition__banner">
          <div className="img">
            <img src={banner} alt="banner" />
          </div>
          <div className="info">
            <p className="info__text">Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012 </p>
            <p className="info__date">
              01/08/2022
              <span>-</span>
              29/08/2022
            </p>
          </div>
          <BorderGradient />
        </div>
        <div className="competition__wrapper">
          <CompetitionItem img={competition1} delay=".2" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
            Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
          </CompetitionItem>
          <CompetitionItem img={competition2} delay=".6" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
            Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
          </CompetitionItem>
          <CompetitionItem img={competition3} delay=".4" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
            Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
          </CompetitionItem>
          <CompetitionItem img={competition4} delay=".8" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
            Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
          </CompetitionItem>
          {isMore &&
            <CompetitionItem img={competition5} delay=".2" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
              Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
            </CompetitionItem>
          }
          {isMore &&
            <CompetitionItem img={competition6} delay=".6" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
              Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
            </CompetitionItem>
          }
          {isMore &&
            <CompetitionItem img={competition7} delay=".4" from="Từ 01/08/2022" to="Đến 29/08/2022 ">
              Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
            </CompetitionItem>
          }
        </div>
        <div className="competition__button">
          <MainButton down={`${isMore}`} onClick={handleMore}>{isMore ? 'Thu lại' : 'Xem thêm'}</MainButton>
        </div>
      </div>
    </div>
  );
}
