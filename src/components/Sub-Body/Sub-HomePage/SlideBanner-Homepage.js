import React, { Component } from 'react';
import '../../../styles/home-style.css';
// import slide1 from '/SlideBanner/slider1.jpeg';
// import slide2 from '/SlideBanner/slider2.jpg';
// import slide3 from '/SlideBanner/slider2.jpg';

class SlideBannerComponent extends Component {
  render() {
    return (
      <>
      {/* light Light Dark dark */}
      
      <div id="carouselExampleLight" class="carousel carousel-light slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="/SlideBanner/slider1.jpeg" class="d-block w-100 slide-homepage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Duy trì và phát triển</h5>
              <p>
              Duy trì và phát triển các nghề truyền thống thủ công mỹ nghệ tại các vùng quê Việt Nam.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src='/SlideBanner/slider2.jpg' className="d-block w-100 slide-homepage" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Chăm sóc và nâng niu</h5>
              <p>
              Chăm sóc Sức khỏe của người Việt bằng những sản phẩm chất lượng từ chính bàn tay người Việt làm ra.
              </p>
            </div>
          </div>
          <div class="carousel-item ">
            <img src='/SlideBanner/slider2.jpg'className="d-block w-100 slide-homepage" alt="..."/>
            <div class="carousel-caption d-none d-md-block ">
              <h5>Đồng hàng và vững bước</h5>
              <p>
              Đồng hành cùng khách hàng sử dụng sản phẩm và cảm nhận sống trong từng phút giây.
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      </>
    );
  }
}

export default SlideBannerComponent;