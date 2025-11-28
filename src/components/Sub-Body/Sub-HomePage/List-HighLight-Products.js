import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/home-style.css';
import '../../../styles/detail-product-style.css';
class ListHighLightProductsComponent extends Component {
  constructor(props) {
    super(props);
    // Danh sách các sản phẩm nổi bật
    this.state = {

      products : [
        { id: 1, name: 'Chải cơ sừng trâu trắng', price: '100k', image: process.env.PUBLIC_URL + '/photoPs/COH001_1.png' },
        { id: 2, name: 'Lược đuôi chuột trâu trắng', price: '150k', image: process.env.PUBLIC_URL + '/photoPs/COH001_2.png' },
        { id: 3, name: 'Bút gạch bạch huyết', price: '200k', image: process.env.PUBLIC_URL + '/photoPs/COH002_1.png' },
        { id: 4, name: 'Trái tim sừng Guasha', price: '250k', image: process.env.PUBLIC_URL + '/photoPs/COH002_2.png' },
        { id: 5, name: 'óLược 5 răng yên ngựa', price: '300k', image: process.env.PUBLIC_URL + '/photoPs/COH001_1.png' },
        { id: 6, name: 'Nơm ống gió', price: '350k', image: process.env.PUBLIC_URL + '/photoPs/COH001_2.png' },
        { id: 7, name: 'Lược 7 răng thưa', price: '300k', image: process.env.PUBLIC_URL + '/photoPs/COH003_1.png' },
        { id: 8, name: 'Gùi xà cầy xẻ', price: '350k', image: process.env.PUBLIC_URL + '/photoPs/COH003_2.png' },
      ]
    };
  }
  handleScrollToTop = () => {
    window.scrollTo(0, 0);  // Cuộn lên đầu trang
  };
  render() {
    const { products}= this.state;
    // Chia danh sách sản phẩm thành các nhóm 4 sản phẩm
    const chunkedProducts = [];
    for (let i = 0; i < products.length; i += 4) {
      chunkedProducts.push(products.slice(i, i + 4));
    }
    return (

      <>
      {/* list products */}
      <div className="container mt-4 ">
        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {chunkedProducts.map((group, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="row justify-content-center">
                  {group.map((product) => (
                    <div key={product.id} className="col-6 col-md-3">
                      <div className="card mb-1 mt-1">
                        <img src={product.image} className="card-img-top" alt={product.name}  /> 
                        

                        {/* <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" fill="red" 
                        class="bi bi-bookmark-star-fill position-absolute top-0 end-0 " viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"/>
                        </svg> */}
                        <div className="card-body">
                          <h6 className="card-title">{product.name}</h6>  
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev crl-ctr-pre-w-list " type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon crl-ctr-icon-w-list" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next w-0 crl-ctr-next-w-list" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon crl-ctr-icon-w-list" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* ônther list */}



      {/* link to products page */}
      <div className='d-flex justify-content-center align-items-center'>
        <Link 
        className=" nav-NavLink icon-link icon-link-hover link-underline-opacity-25 p-1 text-black" 
        to="/product" onClick={this.handleScrollToTop}>
          Đi đến danh sách tất cả các sản phẩm   
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
          </svg>        
        </Link>
      </div>

      </>

    );
  }
}

export default ListHighLightProductsComponent;