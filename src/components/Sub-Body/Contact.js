import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../../styles/contact-style.css'
class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      linkPageFacbook: 'https://www.facebook.com/tuean.tcmn/',
      linkGroubFB: 'https://www.facebook.com/tuean.tcmn/',
      linkYoutube: 'https://www.youtube.com/@AnTuệ-l6g',
      qrcode : process.env.PUBLIC_URL + '/qrcode/qrcode-pagefacebook.png',
      
    }
  }
  render() {
    const {linkPageFacbook, linkGroubFB, linkYoutube, qrcode} = this.state;
    return (
      <div className='container container-body'>
        <div className="">
          {/* header contact */}
          <div className="center_text contact-Background">
            <h3>
              <i>Liên hệ với chúng tôi</i>
            </h3>
            <p>
              <i>
              Bạn có bất kỳ thắc mắc, gợi ý, đóng góp hoặc tìm hiểu về sản phẩm và giải pháp về sức khỏe?
              <br/>
              Liên hệ với chúng tôi!
            </i>
            </p>
          </div>
          {/* content contact */}
          <div className="container contact-background-info ">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h4>Liên hệ hợp tác</h4>
                
                <p>Email: tuean.tcmn@gmail.com</p>
                <p>Hotline: 0866 856 980</p>
                
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h4>Mạng xã hội</h4>
                <p>
                  <p>
                    <Link  
                    className="text-decoration-none text-black textlink" to={linkYoutube} target='blank'>
                      Youtube: Tuệ An Official
                    </Link>
                    </p>
                  <p>Zalo: Tuệ An - 0866 856 980</p>
                  <p>
                    <Link  
                    className="text-decoration-none text-black textlink" to={linkPageFacbook} target='blank'>
                      FaceBook: Tuệ An Official 
                      <br/>link: https://www.facebook.com/tuean.tcmn/
                    </Link>
                  </p>
                  <p>
                  <img src={qrcode}  className="qrcode" alt="..."/>
                  </p>
                  
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h4>Địa chỉ</h4>
                <p>Thụy Ứng, Hòa Bình, Thường Tín, Hà Nội, VN</p>
                <p>8h - 23h</p>
                <p>Tất cả các ngày trong tuần</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComponent;