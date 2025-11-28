import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class MContectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            itemR : '',
        };
        // sendData = (childData) => {
        //     this.props.parentCallback(this.props.i);
        //   }; 
        
    }


       
    
  render() {
    const itemR = this.props.i;
    const onChange = (e) =>{
        this.setState({itemR: e.target.value });
     }
    const    handleCatchData = () =>{
         onChange(6);
      }
    
    return (
        <>
        <input onChange = {this.onChange}  value = {itemR}/>
        
       
        
{/*         
        <Link to="/product/detail%id:" >
                            ...xem thêm...
                            </Link>                     */}
        </>

    );
  }
}

export default MContectComponent;