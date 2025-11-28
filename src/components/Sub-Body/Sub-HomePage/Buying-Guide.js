import React, { Component } from 'react';
import '../../../styles/home-style.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import NoticeIComponent from '../NoticeI';
class BuyingGuideComponent extends Component {
  render() {
    return (
      <>
      <div className=''>
        <p>Các kênh thông tin và chăm sóc khách hàng:</p>
        <div className='row justify-content-around'>
          <div className='col'>
            Facebook
          </div>
          <div className='col'>
            Website
          </div>
          <div className='col'>
            Zalo
          </div>

        </div>
      </div>

      <div className="">  
        <NoticeIComponent/>
      </div>
      </>
    );
  }
}

export default BuyingGuideComponent;