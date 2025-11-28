import React, { Component } from 'react';
import HeaderComponent from './Sub-Layouts/Header.js';
import FooterComponent from './Sub-Layouts/Footer.js';
import BodyComponent from './Sub-Layouts/Body.js';

class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent/>
        <FooterComponent />
      </div>
    );
  }
}

export default LayoutComponent;