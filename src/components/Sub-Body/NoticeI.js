import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/product-style.css';
class NoticeIComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      linkPageFacbook: 'https://www.facebook.com/tuean.tcmn/',
      linkGroubFB: '',
      linkYoutube: 'https://www.youtube.com/@AnTuệ-l6g',
    }
  }
  render() {
    const {linkPageFacbook, linkGroubFB, linkYoutube} = this.state;
    return (
        <div className='noticeI '>
          Kính thưa quý khách!
          <br/>Đây là trang web nhằm mục đích cung cấp thông tin chi tiết về các sản phẩm và chia sẻ các video tập luyện.
          <br/>Cửa hàng không cung cấp dịch vụ bán hàng trên Trang Web này.
          <br/>Quý khách liên hệ với&nbsp;
            <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Tuệ An Official">
            <Link to={linkPageFacbook} target='_blank'>Facebook: Tuệ An</Link>
            </span> để được tư vấn thêm và đặt hàng ngay nhé!
            <p>
              Tham gia vào hội nhóm chăm sóc sức khỏe trên kênh:
              <br/>
              <Link to={linkGroubFB} target='_blank'>Groub Facebook: "Tuệ An và sức khỏe"</Link>
              <br/>
              <Link to={linkYoutube} target='_blank'>Youtube: "Tuệ An Official"</Link>
            </p>
            
            
        </div>
    );
  }
}

export default NoticeIComponent;