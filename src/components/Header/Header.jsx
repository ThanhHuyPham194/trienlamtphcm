import { NavLink,Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/Image/logo.png";

export default function Header() {
  const dayName = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let dayOfWeek = d.getDay();

  const mouseOver = (e) => {
    const dropdownIntroduce = document.querySelector(".dropdown-introduce");
    const dropdownGallery = document.querySelector(".dropdown-gallery");
    const dropdownInfomation = document.querySelector(".dropdown-infomation");
    if (e.target.innerHTML === "Giới thiệu") {
      dropdownIntroduce.style.zIndex = "5";
      dropdownGallery.style.zIndex = "3";
      dropdownInfomation.style.zIndex = "3";
    }
    if (e.target.innerHTML === "Thư viện") {
      dropdownIntroduce.style.zIndex = "3";
      dropdownGallery.style.zIndex = "5";
      dropdownInfomation.style.zIndex = "3";
    }
    if (e.target.innerHTML === "Tin tức") {
      dropdownIntroduce.style.zIndex = "3";
      dropdownGallery.style.zIndex = "3";
      dropdownInfomation.style.zIndex = "5";
    }
  };

  return (
    <div className="header" data-aos="fade" data-aos-duration="1000">
      <div className="main-wrapper">
        <Link to="/">
        <div className="image-logo">
          <img src={logo} alt="" />
        </div>
        </Link>
        <div className="info container">
          <div className="info-left">
          <span>{`${dayName[dayOfWeek]} ngày ${day}, tháng ${month}, ${year}`}</span>
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
          </div>
          <div className="info-center">
            <span className="info-center-head">
              SỞ VĂN HOÁ VÀ THỂ THAO THÀNH PHỐ HỒ CHÍ MINH
            </span>
            <span className="info-center-name">
              TRUNG TÂM THÔNG TIN TRIỂN LÃM
            </span>
          </div>
          <div className="info-right"
                data-aos="zoom-out" data-aos-duration="1000" data-aos-anchor=".header" data-aos-delay="100"
          
          >
            <div className="info-right-input" >
              <input type="text" required id="input-search" />
              <span className="placeholder">Tìm kiếm</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6541 17.5949L21.5836 20.5229C21.7202 20.6643 21.7958 20.8538 21.7941 21.0504C21.7924 21.2471 21.7135 21.4352 21.5745 21.5743C21.4354 21.7133 21.2473 21.7922 21.0507 21.7939C20.854 21.7956 20.6646 21.72 20.5231 21.5834L17.5936 18.6539C15.6793 20.2941 13.204 21.129 10.6873 20.9835C8.17065 20.8381 5.80812 19.7235 4.0955 17.8736C2.38287 16.0238 1.45329 13.5826 1.50181 11.0621C1.55032 8.5417 2.57317 6.13803 4.35571 4.35549C6.13825 2.57294 8.54193 1.5501 11.0624 1.50158C13.5828 1.45307 16.024 2.38265 17.8739 4.09527C19.7237 5.80789 20.8383 8.17042 20.9838 10.6871C21.1292 13.2038 20.2943 15.679 18.6541 17.5934V17.5949ZM11.2501 19.4999C13.4382 19.4999 15.5366 18.6307 17.0838 17.0835C18.6309 15.5364 19.5001 13.4379 19.5001 11.2499C19.5001 9.06186 18.6309 6.96344 17.0838 5.41627C15.5366 3.86909 13.4382 2.9999 11.2501 2.9999C9.06209 2.9999 6.96367 3.86909 5.41649 5.41627C3.86932 6.96344 3.00012 9.06186 3.00012 11.2499C3.00012 13.4379 3.86932 15.5364 5.41649 17.0835C6.96367 18.6307 9.06209 19.4999 11.2501 19.4999V19.4999Z"
                  fill="#404040"
                  id="pathSearch"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="menu">

          <div className="dropdown">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeMenu" : "")}
            >
              Trang chủ
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink
              to="/about/history"
              className={({ isActive }) => (isActive ? "activeMenu" : "")}
              onMouseOver={(e) => mouseOver(e)}
            // onMouseOut={(e) => mouseOut(e)}
            >
              Giới thiệu
            </NavLink>
            <div className="dropdown-content dropdown-introduce">
              <NavLink
                to="about/history"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Lịch sử
              </NavLink>
              <NavLink
                to="about/apparatus"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Bộ máy
              </NavLink>
              <NavLink
                to="about/service"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Dịch vụ
              </NavLink>
            </div>
          </div>
          <div className="dropdown">
            <NavLink
              to="/library"
              className={({ isActive }) => (isActive ? "activeMenu" : "")}
              onMouseOver={(e) => mouseOver(e)}
            >
              Thư viện
            </NavLink>
            <div className="dropdown-content dropdown-gallery">
              <NavLink
                to="/library/gallery"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Triển lãm
              </NavLink>
              <NavLink
                to="library/placard"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Tranh cổ động
              </NavLink>
              <NavLink
                to="library/newsreel"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Ảnh thời sự
              </NavLink>
              <NavLink
                to="library/photogroup"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Câu lạc bộ nhiếp ảnh
              </NavLink>
            </div>
          </div>

          <div className="dropdown">
            <NavLink
              to="/competition"
              className={({ isActive }) => (isActive ? "activeMenu" : "")}
            >
              Cuộc thi
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink
              to="/information"
              className={({ isActive }) => (isActive ? "activeMenu" : "")}
              onMouseOver={(e) => mouseOver(e)}
            >
              Tin tức
            </NavLink>
            <div className="dropdown-content dropdown-infomation">
              <NavLink
                to="/information/culture"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Văn hoá
              </NavLink>
              <NavLink
                to="/information/sport"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Thể thao
              </NavLink>
              <NavLink
                to="/information/travel"
                className={({ isActive }) => (isActive ? "activeSubMenu" : "")}
              >
                Du lịch
              </NavLink>
            </div>
          </div>
          <div className="dropdown">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "activeMenu" : "")}
            >
              Liên hệ
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
