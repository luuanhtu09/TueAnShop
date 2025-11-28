import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePageComponent from '../Sub-Body/HomePage';
import ContactComponent from '../Sub-Body/Contact';
import PostComponent from '../Sub-Body/Post';
import ProductComponent from '../Sub-Body/Product';
import '../../styles/layout-style.css';
//import DetailProductComponent from '../Sub-Body/Sub-Product/detail-product';


class BodyComponent extends Component {
  render() {
    return (
      <div >
        <Routes>
          <Route path="" element={<HomePageComponent/>} />
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/TueAnShop" element={<HomePageComponent/>} />
          <Route path="/TueAnShop/" element={<HomePageComponent/>} />
          <Route path="/homepage" element={<HomePageComponent />} />
          <Route path="/contact" element={<ContactComponent/>} />
          <Route path="/post" element={<PostComponent/>} />
          <Route path="/product" element={<ProductComponent/>} />
          {/* <Route path="/product/detail%id:"  element={<DetailProductComponent/>} /> */}

          {/* <Route component={NotFound}/> */}
          

        </Routes>
        
      </div>
    );
  }
}

export default BodyComponent;