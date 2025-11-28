import React, { Component } from 'react';

import { Link} from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import '../../styles/layout-style.css';
// import logo from '../../logofull.png';

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      linkPageFacbook: 'https://www.facebook.com/tuean.tcmn/',
      linkGroubFB: '',
      linkYoutube: 'https://www.youtube.com/@AnTuệ-l6g',
      
    }
  }
  handleScrollToTop = () => {
    window.scrollTo(0, 0);  // Cuộn lên đầu trang
  };

  render() {
    const {linkPageFacbook, linkGroubFB, linkYoutube} = this.state;
    return (
      <>
        {/* Grid container */}
        <div className="footer-Background">
          {/* grid row */}
          <div className="row">
            {/* grid column */}
            {/* 1 */}
            <div className="col-lg-3 col-md-8 mb-3 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li className="">
                  
                    <div>
                      <img src="/logo/logofull.png" className="logo-Footer" alt="logo" />  
                    </div>
                  
                </li>
                <li>
                  
                    <div className="text-decoration-none text-black" to="#">
                      CÙNG TUỆ AN NHƯ MỘT NGƯỜI BẠN
                      <br/> DUY TRÌ SỨC KHỎE VÀ GÌN GIỮ NÉT ĐẸP 
                      <br/> NGHỀ TRUYỀN THỐNG!
                    </div>
                  
                </li>
              </ul>
            </div>
            {/* 2 */}
            <div className="col-lg-3 col-md-8 mb-3 mb-md-0 ">
              <h6 className="text-uppercase ">Danh mục</h6>
              <ul className="list-unstyled mb-0">
              <li>
                  <p>
                    <NavLink  
                    className="nav-NavLink text-decoration-none text-black" to="/homePage"
                    onClick={this.handleScrollToTop}
                    >
                      Trang chủ
                    </NavLink>
                  </p>
                </li>
                <li>
                  <p>
                    <NavLink 
                    className="nav-NavLink text-decoration-none text-black" to="/product"
                    onClick={this.handleScrollToTop}
                    >
                      Sản Phẩm
                    </NavLink>
                  </p>
                </li>
                <li>
                  <p>
                    <NavLink  
                    className="nav-NavLink text-decoration-none text-black" to="/post"
                    onClick={this.handleScrollToTop}
                    >
                    Bài viết
                    </NavLink>
                  </p>
                </li>

                <li>
                  <p>
                    <NavLink 
                    className="nav-NavLink text-decoration-none text-black" to="/contact"
                    onClick={this.handleScrollToTop}
                    >
                    Liên hệ
                    </NavLink>
                  </p>
                </li>
                
              </ul>
            </div>
            {/* 4 */}
            <div className="col-lg-3 col-md-8 mb-3 mb-md-0">
              <h6 className="text-uppercase">Liên kết</h6>
              <ul className="list-unstyled mb-0">
              <li>
                  <p className="">
                    Zalo: Tuệ An Official - 0866 856 980
                  </p>
                </li>
                <li>
                  <p className="">
                    <Link  
                    className="text-decoration-none text-black" to={linkPageFacbook} target='blank'>
                      Page Facebook: Tuệ An Official
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="">
                  <Link  
                    className="text-decoration-none text-black" to={linkGroubFB} target='blank'>
                      Groub Facebook: Tuệ An và Sức khỏe
                  </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link className="text-decoration-none text-black" to={linkYoutube} target='blank'>
                      YouTube: Tuệ An Official
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            {/* 3 */}
            <div className="col-lg-3 col-md-8 mb-3 mb-md-0">
              <h6 className="text-uppercase">Về Tuệ An</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <p className="">Địa chỉ: Thụy Ứng, Hòa Bình, Thường Tín, Hà Nội, Việt Nam</p>
                </li>
                <li>
                  <p className="">Email: tuean.tcmn@gmail.com</p>
                </li>
                <li>
                  <p className="">Hotline: 0866 856 980</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Coppy right */}
          {/* <div>
            <p className="border_solid_top">
              &copy;{new Date().getFullYear()} Công ty TNHH Thủ Công Mỹ Nghệ Tuệ An.
            </p>
          </div> */}
            <p className='text-center'>
              &copy;{new Date().getFullYear()} Tuệ An Official.
            </p>
        </div>
      </>
    );
  }
}

export default FooterComponent;