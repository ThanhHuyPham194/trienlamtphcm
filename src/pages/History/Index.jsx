import React from 'react';
import './index.scss';
import MainTitle from '../../components/MainTitle/MainTitle';
import history from '../../assets/images/About/image.jpg';
import arrow from '../../assets/icons/arrow-down.svg';
import BorderGradient from '../../components/BorderGradient/BorderGradient';
import { useState } from 'react';
export default function History() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const handleOpen = (checked, setFunc) => {
    setFunc(!checked);
  };
  return (
    <div className='history main-wrapper'>
      <div className="container">
        <MainTitle sub="history">Lịch sử</MainTitle>
        <div className="history__info">
        <div className="img" data-aos="fade-in">
          <img src={history} alt="about_image" />
        </div>
        <div className="text" data-aos="fade-left">
          <h2 className="sub-title">
            TRUNG TÂM THÔNG TIN
            <span>
              TRIỂN LÃM THÀNH PHỐ HỒ CHÍ MINH
            </span>
            <BorderGradient />
          </h2>
          <p>Trung tâm Thông tin Triển lãm Thành phố Hồ Chí Minh được thành lập theo Quyết định số 272/QĐ-UB ngày 01 tháng 8 năm 1990 của Ủy ban nhân dân Thành phố Hồ Chí Minh trên cơ sở Phòng Thông tin cổ động.</p>
        </div>
      </div>
      <div className="history__dropdown">
        <div className="history__dropdown--item"
          onClick={() => handleOpen(isOpen1, setIsOpen1)}
        >
          <div className="main">
            <img src={arrow} alt="arrow" className={`${isOpen1 ? 'active' : ''}`} />
            <p className="sub-title">Quá trình hình thành</p>
          </div>
          <div className="sub" data-aos="fade-down" data-aos-duration="1000">
            {isOpen1 &&
              <p className='text'>Những năm 1980, nhằm thực hiện chủ trương của Đảng về ba chương trình kinh tế và đáp ứng yêu cầu của nền kinh tế thị trường, Phòng Thông tin Cổ động Triển lãm lên đề án thành lập Công ty Quảng cáo Sài Gòn trực thuộc Phòng, sau đó tách ra hoạt động độc lập. Công ty là đơn vị đi tiên phong trong lĩnh vực quảng cáo, một loại hình văn hóa - thông tin mới mẻ thời kỳ này. Năm 1990, thực hiện theo Quy chế tổ chức và hoạt động của Trung tâm Thông tin Triển lãm cấp tỉnh – thành của Bộ Thông tin (nay là Bộ Văn hóa, Thể thao và Du lịch), Phòng Thông tin Cổ động được Ủy ban nhân dân Thành phố ra quyết định chuyển thành TRUNG TÂM THÔNG TIN TRIỂN LÃM (QĐ số 272/QĐ-UB ngày 01/8/1990 của Ủy ban nhân dân Thành phố Hồ Chí Minh).</p>
            }
          </div>
        </div>
        <div className="history__dropdown--item"
          onClick={() => handleOpen(isOpen2, setIsOpen2)}
        >
          <div className="main">
            <img src={arrow} alt="arrow" className={`${isOpen2 ? 'active' : ''}`} />
            <p className="sub-title">Vị trí và chức năng</p>
          </div>
          <div className="sub" data-aos="fade-down" data-aos-duration="1000">
            {isOpen2 &&
              <p className='text'>Những năm 1980, nhằm thực hiện chủ trương của Đảng về ba chương trình kinh tế và đáp ứng yêu cầu của nền kinh tế thị trường, Phòng Thông tin Cổ động Triển lãm lên đề án thành lập Công ty Quảng cáo Sài Gòn trực thuộc Phòng, sau đó tách ra hoạt động độc lập. Công ty là đơn vị đi tiên phong trong lĩnh vực quảng cáo, một loại hình văn hóa - thông tin mới mẻ thời kỳ này. Năm 1990, thực hiện theo Quy chế tổ chức và hoạt động của Trung tâm Thông tin Triển lãm cấp tỉnh – thành của Bộ Thông tin (nay là Bộ Văn hóa, Thể thao và Du lịch), Phòng Thông tin Cổ động được Ủy ban nhân dân Thành phố ra quyết định chuyển thành TRUNG TÂM THÔNG TIN TRIỂN LÃM (QĐ số 272/QĐ-UB ngày 01/8/1990 của Ủy ban nhân dân Thành phố Hồ Chí Minh).</p>
            }
          </div>
        </div>
        <div className="history__dropdown--item"
          onClick={() => handleOpen(isOpen3, setIsOpen3)}
        >
          <div className="main">
            <img src={arrow} alt="arrow" className={`${isOpen3 ? 'active' : ''}`} />
            <p className="sub-title">Nhiệm vụ và quyền hạn</p>
          </div>
          <div className="sub" data-aos="fade-down" data-aos-duration="1000">
            {isOpen3 &&
              <p className='text'>Những năm 1980, nhằm thực hiện chủ trương của Đảng về ba chương trình kinh tế và đáp ứng yêu cầu của nền kinh tế thị trường, Phòng Thông tin Cổ động Triển lãm lên đề án thành lập Công ty Quảng cáo Sài Gòn trực thuộc Phòng, sau đó tách ra hoạt động độc lập. Công ty là đơn vị đi tiên phong trong lĩnh vực quảng cáo, một loại hình văn hóa - thông tin mới mẻ thời kỳ này. Năm 1990, thực hiện theo Quy chế tổ chức và hoạt động của Trung tâm Thông tin Triển lãm cấp tỉnh – thành của Bộ Thông tin (nay là Bộ Văn hóa, Thể thao và Du lịch), Phòng Thông tin Cổ động được Ủy ban nhân dân Thành phố ra quyết định chuyển thành TRUNG TÂM THÔNG TIN TRIỂN LÃM (QĐ số 272/QĐ-UB ngày 01/8/1990 của Ủy ban nhân dân Thành phố Hồ Chí Minh).</p>
            }
          </div>
        </div>
      </div>
      <div className="history__rule">
        <p>Quy chế Tổ chức và hoạt động của Trung tâm Thông tin Triển lãm Thành phố Hồ Chí Minh</p>
        <p>Giấy phép hoạt động số 74/GP-ICP STTTT ngày 3/10/2012</p>
      </div>
      </div>
  
    </div >
  );
}
