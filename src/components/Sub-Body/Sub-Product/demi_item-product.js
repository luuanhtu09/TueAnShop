import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
//import SP001 from '../../../assets/PhotoProducts/SP000/SP001.png';
// import DetailProductComponent from './detail-product';
// 1 component trung gian giữa item và detail
import MContectComponent from './context';

class ItemProductsComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      //k: '',

    };

  }
  handleCatchDetail = (i) =>{
    //console.log('show id4', i.tenSP);
    this.setState({k: i.maSP});
  }
  // handleChange= (i) =>{
  //   //console.log('show id4', i.tenSP);
  //   this.setState({k: i});
  // }
  render() {
    const item = this.props.item;
    const index = this.props.index;
    //let elmItem = null;
    
    return (
      <div className="card carditem">
                <img src={SP001} className="card-img-top card-photo" alt="..." />
                
                <div className="card-body card-content">
                  <h6 className="card-title">{item.tenSP} - {item.maSP}</h6>
                  
                  Giá: {item.khoangGia}<br/>
                  <p className="card-text">
                    {item.mtChung}
                    
                    <button  onClick = {() => this.handleCatchDetail(item)} type="button" to="/product/detail%id:" >...xem thêm...</button>
                    {/* <a href="/detail%MaSP" ></a> /product/detail%id:*/}
                    </p>


                    
                    
                  
                </div>
                
                
      </div>
          
          
      
    );
  }
}

export default ItemProductsComponent;