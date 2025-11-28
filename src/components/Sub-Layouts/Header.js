import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/layout-style.css';
// import logo from '../../logodemoblack.png';

class HeaderComponent extends Component {
   constructor(props) {
    super(props);
    this.state ={
      logo : process.env.PUBLIC_URL + '/logo/logodemoblack.png',
      
    }
  }
  render() {
    const {logo} = this.state;
    return (
      <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <a className="navbar-nav  mx-auto " href="/homePage">
            <img src= {logo} className="logoIcon" alt="logo" />
          </a>
        </div>
      </nav>
      
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
        {/* <a>bg-body-tertiary</a> 
        <a class="navbar-brand" href="#">
          <img src={logo} className="logoIcon" alt="logo" />
        </a> */}
                
        {/* <img src={logo} className="logoIcon" alt="logo" /> */}  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            {/* nav - left */}
            <ul className="navbar-nav justify-content-center flex-grow-1 "> 
              {/* justify-content-center flex-grow-1 */}
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-NavLink mx-lg-4" to="/homepage">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-NavLink mx-lg-4" to="/product">
                  Sản phẩm
                </NavLink>
              </li>
              

              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-NavLink mx-lg-4" to="/post">
                  Bài đăng
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-NavLink mx-lg-4" to="/contact">
                  Liên hệ
                </NavLink>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>
      </div>   
    );
  }
}

export default HeaderComponent;