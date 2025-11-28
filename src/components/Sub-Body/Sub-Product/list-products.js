import React, { Component } from 'react';
// import ItemProductsComponent from './item-product.js';
// import DetailProductComponent from './detail-product.js';
import { Link } from 'react-router-dom';

import '../../../styles/product-style.css';
import '../../../styles/detail-product-style.css';


class ListProductsComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      i : '',
      ma : '',
      ten : '',
      kgia  :'',
      mtchung:'', 
      ploai :'', 
      tso   :'', 
      gpk :'',
      cdung  :'',
      hinh: [],
      lvideo: '',
      //pagination
      currentPage: 1,
      productsPerPage: 10,
      
      //reset modal
      selectedImageIndex: 0,  // Trạng thái cho ảnh hiện tại
      showModal: false,  // Trạng thái modal

      

    };
  
  }  
 //1. Mở modal và thiết lập lại chỉ số ảnh (reset về ảnh đầu tiên)
  handleCatchDetailModal = (i) =>{
    this.setState({
      i: i.id,
      ma : i.maSP,
      ten : i.tenSP,
      hinh : i.hinhAnh,
      kgia: i.khoangGia,
      mtchung: i.mtChung, 
      ploai: i.phanLoai, 
      tso:i.thongSo, 
      gpk:i.giaPK,
      cdung:i.congDung, 
      lvideo: i.linkVideo,
      //
      showModal: true,
      selectedImageIndex: 0,  // Reset về ảnh đầu tiên khi mở modal
    });
  }  
  //1.1  Đóng modal
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };
  //1.2. Chuyển sang ảnh tiếp theo
  goToNextImage = () => {
    this.setState((prevState) => {
      const nextIndex = (prevState.selectedImageIndex + 1) % prevState.hinh.length;
      return { selectedImageIndex: nextIndex };
    });
  };
  //1.3.Chuyển sang ảnh trước
  goToPreviousImage = () => {
    this.setState((prevState) => {
      const prevIndex =
        (prevState.selectedImageIndex - 1 + prevState.hinh.length) % prevState.hinh.length;
      return { selectedImageIndex: prevIndex };
    });
  };

  //2. paginationpagination
  getPaginatedProducts = () => {
    const { currentPage, productsPerPage, items } = this.state;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return this.props.items.slice(indexOfFirstProduct, indexOfLastProduct);
  };  
    //2.1. Chuyển đến trang kế tiếp
    nextPage = () => {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1
      }));
    }; 
    //2.2. Chuyển đến trang trước
    prevPage = () => {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1
      }));
    };
     //2.3. thay thổi tìm kiếm và ổn định sau tìm kiếm với trang 1
    componentDidUpdate(prevProps) {
    // Khi props.products thay đổi => reset currentPage về 1
    if (prevProps.items !== this.props.items) {
      this.setState({ currentPage: 1 });
    }
  }
    //2.4. Chuyển đến một trang cụ thể
    goToPage = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
    };
  render() {
    //items
    const items = this.props.items;
    //console.log(items);
    // const { id,  maSP,  tenSP, hinhAnh, khoangGia, mtChung,  phanLoai, thongSo, giaLoai, huongDan}= this.state;
     const {i, ma, hinh, ten, kgia, mtchung, ploai, tso, gpk, cdung, lvideo } = this.state;
    //  console.log('hinhh', hinh);

    //reset modal
     const {selectedImageIndex, showModal } = this.state;

    //pagination
    const { currentPage, productsPerPage} = this.state;
    const paginatedProducts = this.getPaginatedProducts();
    const totalPages = Math.ceil(items.length / productsPerPage);//Tổng số trang
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentItems = items.slice(startIndex, startIndex + productsPerPage);
    //console.log('DS hiện tại', currentItems);
    return (
      <div className='app-subs '>
        {/* Modal */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} id="myModal" tabIndex="-1" aria-hidden={!showModal}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
                        {/* header modal */}
                        <div className="modal-header">
                          {/* <div>{ma}</div> */}
                        <button type="button" 
                        className="btn-close " 
                        data-bs-dismiss="modal"
                        onClick={this.handleCloseModal}
                        ></button>
                        </div>
                        {/* start body modal */}
                        <div className="modal-body">                  
                            {/* start detail*/}
                          <div className="details">
                            <div className="big-img">
                              <div id="carouselExampleDark" className="carousel carousel-dark slide">
                                <div className="carousel-indicators">
                                      {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"  aria-label="Slide 3"></button>
                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"  aria-label="Slide 4"></button>
                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"  aria-label="Slide 5"></button>
                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"  aria-label="Slide 6"></button>
                                       */}
                                  {hinh.map((image, index) => (
                                    <button
                                      key={index}
                                      type="button"
                                      data-bs-target="#carouselExampleDark"
                                      data-bs-slide-to={index}
                                      className={selectedImageIndex === index ? 'active' : ''}
                                      aria-current={selectedImageIndex === index ? 'true' : 'false'}
                                      aria-label={`Slide ${index + 1}`}
                                    ></button>
                                  ))}
                                  </div>
                                  <div className="carousel-inner">
                                    {hinh.map((image, index) => (
                                      <div className={`carousel-item ${selectedImageIndex === index ? 'active' : ''}`} key={index}>
                                        <img src={image} className="d-block w-100" alt={`Image ${index + 1}`} />
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* <div className="carousel-inner">
                                      <div className="carousel-item active">
                                        <img key={0} src= {hinh[0]}  className="d-block" alt={`Image ${0}`}/>
                                      </div>
                                      <div className="carousel-item" >
                                        <img key={1} src={hinh[1]}  className="d-block" alt={`Image ${0}`}/>
                                      </div>
                                      <div className="carousel-item">
                                        <img key={2} src={hinh[2]}  className="d-block" alt={`Image ${0}`}/>
                                      </div>
                                      <div className="carousel-item">
                                        <img  key={3} src={hinh[3]}  className="d-block" alt={`Image ${0}`}/>
                                      </div>
                                      <div className="carousel-item">
                                        <img key={4} src={hinh[4]}  className="d-block" alt={`Image ${0}`}/>
                                      </div>
                                      <div className="carousel-item">
                                        <img key={5} src={hinh[5]}  className="d-block" alt={`Image ${0}`}/>
                                      </div>
                                  </div> */}
                                  <button className="carousel-control-prev" 
                                  type="button" 
                                  data-bs-target="#carouselExampleDark" 
                                  data-bs-slide="prev"
                                  onClick={this.goToPreviousImage}>
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="visually-hidden">Previous</span>
                                  </button>
                                  <button  
                                  className="carousel-control-next" 
                                  type="button" 
                                  data-bs-target="#carouselExampleDark" 
                                  data-bs-slide="next"
                                  onClick={this.goToNextImage}>
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="visually-hidden">Next</span>
                                  </button>
                                </div>
                              </div>
                              {/* end slide img */}
                              {/* start box */}
                              <div className="box">
                                <h4 className='col'>{ten}</h4>
                                  {/* <span className='miniText'>{ma}</span> */}
                                  <b><i>Giá: </i></b> <span className=' col text-danger'>{kgia}</span>
                                  <div><b><i>Phân loại: </i></b>{ploai}</div>
                                  <div>
                                    <b><i>Thông số: </i></b>
                                    <div>&nbsp;+ {tso[0]}</div>
                                    <div>&nbsp;+ {tso[1]}</div>
                                    <div>&nbsp;+ {tso[2]}</div>
                                  </div>
                                  <div>
                                    <b><i>Phân khúc: </i></b>
                                    <div>&nbsp;+ {gpk[0]}</div>
                                    <div>&nbsp;+ {gpk[1]}</div>
                                  </div>
                                  <div><b><i>Công dụng: </i></b></div>
                                  <div className='boxHD'>
                                  {cdung}
                                  </div>
                                  <div>
                                    <Link to={lvideo} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                    </svg>
                                    Video hướng dẫn sử dụng: {ten}
                                    </Link>
                                  </div>
                                  <Link to='https://www.facebook.com/latu279/' target="_blank">
                                  <button className="btncart">
                                    Đặt hàng & nhận khuyến mãi  
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"/>
                                      </svg>
                                    </button> 
                                  </Link> 
                              </div>
                              {/* end box */}
                            <div>
                            {/* end detail  */}
                          </div>
                            
                            </div>
                            {/* end1 */}
                            {/*  */}
                            <div className='details'>
                              <div className='box'> 

                              </div>
                              

                            </div>
                        </div>
                        {/* end body modal */}
                    </div>
                  </div>
        </div>
        {/* map list */}
        <div className='container-list'>
        {
         paginatedProducts.map((item, i) =>(
            <div className="card carditem " >
              {/* {item.hinhAnh[0]} 
              ../../../assets/PhotoProducts/SP000/SP001.png*/}
              <img src={item.hinhAnh[0]} className="card-img-top card-photo" alt="..." /> 
              <div className="card-body card-content">
               <h6 className="card-titlecc">{item.tenSP}</h6>  
                <div>Giá: <span className=''>{item.khoangGia}</span></div>
                <div className="card-decription">{item.mtChung}</div>
                <button onClick = {() => this.handleCatchDetailModal(item) }  type="button"
                  className="btn btn-light mr-1 btnmore" 
                  data-bs-toggle="modal" 
                  data-bs-target="#myModal" 
                  >
                  Xem thêm
                </button>
                {/* modal */}
                

                


                  
              </div> 
                           
            </div>
          ))
        }
        </div>
        {/* pagination */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center" >
            {/* <li class="page-item disabled">
              <a class="page-link"  href="#" onClick={this.prevPage} disabled={currentPage === 1}>
              &laquo;
              </a>
            </li> */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;
              return (
            <li 
              className={`page-item ${isActive ? "active" : ""}`}
              key = {pageNumber}
              active = { (pageNumber) === currentPage}
              onClick={() => this.goToPage(pageNumber)}
            >
              <a class="page-link" href="#" >
                {pageNumber}
              </a>
            </li>
            );
          }
          )}
            {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li> */}
            {/* <li class="page-item">
              <a class="page-link" href="#" 
              onClick={this.nextPage} disabled={currentPage === totalPages}>
                &raquo;
              </a>
            </li> */}
          </ul>
        </nav>
        {/* end pagination */}

              
      </div>
    );
  }
}

const styles = {
  pagination: {
    listStyle: "none",
    display: "flex",
    gap: "10px",
    padding: 0,
  },
  page: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    color: "#333",
    transition: "0.3s",
  },
  active: {
    backgroundColor: "#007BFF",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #007BFF",
  },
};

export default ListProductsComponent;