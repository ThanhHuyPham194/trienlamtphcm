import React from 'react';
import CompetitionItem from '../../../../components/CompetitionItem/CompetitionItem';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import competition1 from '../../../../assets/images/Home/competition1.png';
import competition2 from '../../../../assets/images/Home/competition2.png';
import competition3 from '../../../../assets/images/Home/competition3.png';
import { useNavigate } from 'react-router-dom';

import './CompetitionHome.scss';
import MainButton from '../../../../components/MainButton/MainButton';
export default function CompetitionHome() {
    const navigate = useNavigate();
    return (
        <section className='competition-home main-wrapper'>
            <div className="container">
                <MainTitle sub="competition">Cuộc thi</MainTitle>
                <div className="competition-home__wrapper"  data-aos="fade-up" data-aos-duration="1000">
                    <CompetitionItem from="Từ 01/08/2022" to="Đến 29/08/2022" img={competition1}>
                        Cuộc thi sáng tác ảnh nghệ thuật “Thành phố Hồ Chí Minh - Chào Xuân yêu thương” năm 2012
                    </CompetitionItem>
                    <CompetitionItem delay={1.5} from="Từ 01/07/2022" to="Đến 29/07/2022" img={competition2}>
                        Phát động cuộc thi sáng tác tranh cổ động kỷ niệm 110 năm Ngày Bác Hồ ra đi tìm đường cứu nước
                    </CompetitionItem>
                    <CompetitionItem delay={1} from="Từ 01/06/2022" to="Đến 29/06/2022" img={competition3}>
                        Phát động cuộc thi thiết kế biểu trưng thành phố Thủ Đức
                    </CompetitionItem>
                </div>
                <div className="competition-home__button">
                    <MainButton onClick={() => navigate('/competition')}>Xem tất cả</MainButton>
                </div>
            </div>
        </section>
    );
}
