
import React, { Component } from 'react';
import '../../styles/layout-style.css';

import SlideBannerComponent from '../Sub-Body/Sub-HomePage/SlideBanner-Homepage';
import AboutUsComponent from './Sub-HomePage/AboutUs';
import ListHighLightProductsComponent from './Sub-HomePage/List-HighLight-Products';
import ListYoutubeComponent from './Sub-HomePage/List-Youtube';
import BuyingGuideComponent from './Sub-HomePage/Buying-Guide';

class HomePageComponent extends Component {
  render() {
    return (
      <div className='container container-body w-100'>
        <div className='mCom'>
          <SlideBannerComponent/>
        </div>
        <div className='mCom'>
          <h4>Về Tuệ An</h4>
          <AboutUsComponent/>

        </div>

        <div className='mCom '>
          <h4>Danh sách sản phẩm nổi bật</h4>
          <ListHighLightProductsComponent/>
          {/* <hr/> */}
        </div>

        <div className='mCom'>
          <h4>Kênh Youtube</h4>
          <ListYoutubeComponent/>
        </div>

        {/* <div className='mCom'>
          <h4>Hướng dẫn đặt hàng</h4>
          <BuyingGuideComponent/>
        </div> */}
      </div>
    );
  }
}

export default HomePageComponent;