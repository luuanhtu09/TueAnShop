import React, { Component } from 'react';
import '../../../styles/home-style.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
class ListYoutubeComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      linkPageFacbook: 'https://www.facebook.com/tuean.tcmn/',
      linkGroubFB: '',
      linkYoutube: 'https://www.youtube.com/@AnTuệ-l6g',
      linkVideoYoutube00:"https://www.youtube.com/watch?v=yLB7thi9Urc&t=428s",
      linkVideoYoutube01:"https://www.youtube.com/watch?v=yLB7thi9Urc&t=428s",
      linkVideoYoutube02:"https://www.youtube.com/watch?v=yLB7thi9Urc&t=428s",
      linkVideoYoutube03:"https://www.youtube.com/watch?v=yLB7thi9Urc&t=428s",
      linkVideoYoutube04:"https://www.youtube.com/watch?v=yLB7thi9Urc&t=428s",
      
    }
  }
  render() {
    const {linkPageFacbook, linkGroubFB, linkYoutube, linkVideoYoutube00, linkVideoYoutube01, linkVideoYoutube02, linkVideoYoutube03, linkVideoYoutube04} = this.state;
    return (
      <>

        <div className="row video-container">     
            {/*  */}
              <ReactPlayer 
                    className='col videoo'
                    playing={true} controls={true}
                    muted url={linkVideoYoutube00}                   
              />
              <div className="col list-videoo ">               
               <h6>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-youtube text-danger" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg> 
                  &ensp; 
                  <Link className="icon-link icon-link-hover link-underline-danger link-underline-opacity-25 p-1 text-black" 
                  to={linkYoutube} target='blank'>
                  Cùng "Tuệ An Official" "Sống xanh - sống khỏe - sống vui" mỗi ngày nhé! 
                  </Link>
                </h6>
                <p>Mong muốn đồng hành cùng các quý bạn, chúng tôi thấu hiểu và đồng hành tập luyện cùng các bạn qua 
                  những video hữu ích. Dưới đây là gợi ý một số video nổi bật:
                </p>
                <Link className="icon-link icon-link-hover link-underline-danger link-underline-opacity-25 p-1 text-black" 
                to={linkVideoYoutube01} target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-danger" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                  Cách sử dụng Guasha sừng mát xa mặt
                </Link>
                <Link className="icon-link icon-link-hover link-underline-danger link-underline-opacity-25 p-1 text-black" 
                to={linkVideoYoutube02} target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-danger" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                  Cách sử dụng Guasha sừng mát xa cổ vai gáy
                </Link>
                <Link className="icon-link icon-link-hover link-underline-danger link-underline-opacity-25 p-1 text-black" 
                to={linkVideoYoutube03} target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-danger" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                  Hướng dẫn combo bấm huyệt, mát xa chân tay bằng Bọ cạp vân 
                </Link>
                <Link className="icon-link icon-link-hover link-underline-danger link-underline-opacity-25 p-1 text-black" 
                to={linkVideoYoutube04} target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-danger" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                  Cách sử dụng Guasha sừng mát xa cổ vai gáy
                </Link>
                
              </div>
        </div>
      </>
    );
  }
}

export default ListYoutubeComponent;