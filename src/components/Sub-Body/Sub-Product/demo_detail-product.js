import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../../../styles/product-style.css';
import '../../../styles/detail-product-style.css';
// import SP001 from '../../../assets/PhotoProducts/SP000/SP001.png';
// import SP002 from '../../../assets/PhotoProducts/SP000/SP002.png';
// import SP003 from '../../../assets/PhotoProducts/SP000/SP003.png';
// import SP004 from '../../../assets/PhotoProducts/SP000/SP004.png';

// import MContectComponent from './context';
// import { Callbacks } from 'jquery';
class DetailProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     i :'',

    };
 }
//  callbackFunction = (childData) => {
//     this.setState(childData)
//   };
  render() {

    return (
      <>

      <div className='app'>
      
        <div className="details" key="{index}">
          <div>
            
          </div>
              <div className="big-img">
                
                <div id="carouselExampleIndicators" className="carousel slide ">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src='{SP001}'  className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src='{SP002}'  className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src='{SP003}'  className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src='{SP004} ' className="d-block" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
              </div>

              <div className="box">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item "><Link className='text-decoration-none text-black miniText ' to="/product">Danh sách sản phẩm</Link></li>
                    <li className="breadcrumb-item "><Link className='text-decoration-none text-black miniText' to="#">Lược</Link></li>
                  </ol>
                </nav>
                {/* <div className="row">
                  <h2>{item.tenSP}</h2>
                  <span>${item.khoangGia}</span>
                </div>
              
                <p>{item.phanLoai}</p>
                <p className='miniText'>{item.maSP}</p>
                <p>{item.thongSo}</p>
                <p>{item.giaLoai}</p>
                <p>{item.huongDan}</p> */}

               
                <button className="cart">Đặt hàng trên Facebook</button>
                <button className="cart">Đặt hàng trên Zalo</button>
              </div>
        </div>
        </div>


        {/* <div className="row itemP-container">
            <div className="col ">
                <div id="carouselExampleIndicators" className="carousel slide ">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={guasha1}  className="d-block photo" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={guasha1}  className="d-block photo " alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={guasha1}  className="d-block photo" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="col">
                <p>Tên - mã SPSP</p>
                <p>Phân Loại</p>
                <p>Mô tả - Thông số</p>
                <p>Giá</p>
                <p>Hướng dẫn sd</p>

            </div>
        </div>  */}
      </>
    );
  }
}

export default DetailProductComponent;