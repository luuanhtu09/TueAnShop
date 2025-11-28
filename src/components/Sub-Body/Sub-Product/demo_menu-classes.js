import React, { Component } from 'react';

class MenuClassesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strFilter: '',
      strSearch: '',
      //onChangeFilter: '',
      //sendData: '',
    }
    
    //is.handleFilter = this.handleFilter.bind(this); dung arrow funtion thif khoong caanf sd bind. 
    // prop là :  onchangeFilter
    
  }

  onChangeFilter = (e) =>{
    this.setState({strFilter: e.target.value });
  }
  onClickClear = (e) =>{
    this.setState({strFilter: ''});
  }
  // handleFilter () {
  //   this.props.handleFilter(this.state.srtFilter);
  // }

  sendData = () => {
    this.props.parentCallback(this.state.strFilter);
  }

  
  render() {
    //const items = this.props.items;
    // const {srtFilter, srtSearch } = this.props;
    const {strFilter, strSearch } = this.state;
    //console.log(items);
    //console.log(strFilter);

     
    // console.log(this.handleFilter);
    return (
      <div className='row'>
        <p>inra menu demo data: {strFilter}</p>
        <div className='col '>
          {/* FillterFillter */}
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
              </svg>
            </span>
            <button onClick={this.onClickClear}  className="btn btn-outline-secondary" type="button" id="button-addon2">
              Clear
            </button>
            <input 
            type="text" className="form-control" 
            placeholder="Tìm kiếm ..." aria-label="Tìm kiếm" 
            aria-describedby="addon-wrapping"
            name="filter"
            value={strFilter}
            onChange = {this.onChangeFilter} 
            />
          </div>
        </div>
        <div className='col '>
          {/* sreacher with choice */}
          <div className="input-group mb-3">
            <select className="form-select" aria-label="Default select example" aria-describedby="button-addon2">
              <option selected>Tìm theo phân loại</option>
              <option value="1">Lược</option>
              <option value="2">Mát xa mặt</option>
              <option value="2">Mát xa toàn thân</option>
              <option value="2">Day bấm huyệt</option>
              <option value="2">Trang sức</option>
            </select>
            {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart-fill" viewBox="0 0 16 16">
              <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
              </svg> 
            </button>
          </div>
          
          
        </div>
        <div>Danh mục: loại a, loại b, loại c</div>
      </div>
    );
  }
}

export default MenuClassesComponent;