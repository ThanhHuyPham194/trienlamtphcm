import React,{useState} from "react";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import MainTitle from "../../components/MainTitle/MainTitle";
import MainButton from "../../components/MainButton/MainButton";
import "./Index.scss";
import image1 from "../../assets/images/Gallery/image1.png";
import image2 from "../../assets/images/Gallery/image2.png";
import image3 from "../../assets/images/Gallery/image3.png";
import image4 from "../../assets/images/Gallery/image4.png";
import image5 from "../../assets/images/Home/gallery6.png";
import image6 from "../../assets/images/Home/gallery7.png";



export default function Gallery() {
  const [isMore, setIsMore] = useState(false);
  const handleMore = () => {
    setIsMore(!isMore);
  };
  return (
    <div className="gallery">
      <div className="main-wrapper">
        <MainTitle sub="GALLERY">Triển lãm</MainTitle>
        <div className="gallery-list container">
          <GalleryItem
            dateStart="21/06/2022"
            dateEnd="21/07/2022"
            title="Khai mạc triển lãm kỷ niệm 75 năm ngày Thương binh - Liệt sĩ tại Thành phố Hồ Chí Minh"
            content="(HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022)"
            srcImage={image1}
          ></GalleryItem>
          <GalleryItem
            dateStart="21/06/2022"
            dateEnd="21/07/2022"
            title="Phát động cuộc thi sáng tác ảnh thời sự, nghệ thuật chủ đề “Bức tranh thành phố năm 2019”"
            content="(HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) "
            srcImage={image2}
          ></GalleryItem>
          <GalleryItem
            dateStart="21/06/2022"
            dateEnd="21/07/2022"
            title="Triển lãm ảnh kỷ niệm 131 năm ngày sinh Chủ tịch Tôn Đức Thắng"
            content="(HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) "
            srcImage={image3}
          ></GalleryItem>
          <GalleryItem
            dateStart="21/06/2022"
            dateEnd="21/07/2022"
            title="Bình Thạnh khai mạc triển lãm ảnh “50 năm vững bước theo người”"
            content="(HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022)"
            srcImage={image4}
          ></GalleryItem>
          {isMore &&
            <GalleryItem
            dateStart="21/06/2022"
            dateEnd="21/07/2022"
            title="Triển lãm ảnh kỷ niệm 131 năm ngày sinh Chủ tịch Tôn Đức Thắng"
            content="(HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022) "
            srcImage={image5}
          ></GalleryItem>
          }
          {
            isMore &&   <GalleryItem
            dateStart="21/06/2022"
            dateEnd="21/07/2022"
            title="Bình Thạnh khai mạc triển lãm ảnh “50 năm vững bước theo người”"
            content="(HIEC) – Sáng ngày 26/7, triển lãm Thành phố Hồ Chí Minh khắc sâu đạo lý “Uống nước nhớ nguồn” nhân kỷ niệm 75 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2022)"
            srcImage={image6}
          ></GalleryItem>
          }
       
              <div className="gallery_button">
          {isMore ?
            <MainButton down={`${isMore}`} onClick={handleMore}>Thu lại</MainButton>
            :
            <MainButton down={`${isMore}`} onClick={handleMore}>Xem thêm</MainButton>}
        </div>
        </div>
      </div>
    </div>
  );
}
