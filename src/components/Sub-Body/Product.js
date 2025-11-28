import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import * as bootstrap from 'bootstrap';  // Import Bootstrap JS
import '../../styles/product-style.css';
import Items from "../../data/dataProducts";
import ListProductsComponent from './Sub-Product/list-products';
import NoticeIComponent from './NoticeI';

class ProductComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : Items,
      strFilter: '',
      strSearch: '', 
      suggestions: [
        "Sừng trâu trắng",
        "Sừng trâu ta đen VIP",
        "Lược chải tóc",
        "Lược mát xa",
        "Mát xa mặt",
        "Mát xa cổ vai gáy",
        "Mát xa toàn thân",
        "Day và bấm huyệt",
        "Cạo gió",
        "Trang sức",
        "Dịch vụ gói quà",
        "Quà tặng cho khách hàng"
      ],
    };
  }
  onChangeFilter = (e) =>{
    this.setState({strFilter: e.target.value });
  }
  onClickClear = (e) =>{
    this.setState({strFilter: ''});
  }
   // Hàm loại bỏ dấu tiếng Việt
   removeVietnameseAccents(str) {
    const accents =    'àáạảãàâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ';
    const nonAccents = 'aaaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD';
    return str.split('').map((char) => {
      const index = accents.indexOf(char);
      return index !== -1 ? nonAccents[index] : char;
    }).join('');
  }
//
// componentDidMount() {
//   // Khởi tạo tooltip bằng cách sử dụng Bootstrap JS
//   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//   tooltipTriggerList.forEach(tooltipTriggerEl => {
//     new bootstrap.Tooltip(tooltipTriggerEl); // Sử dụng Bootstrap để khởi tạo tooltip
//   });
// }


  render() {
    const { items, strFilter,  strSearch, }= this.state;
    const filterItems = [...this.state.items];
   
    // Loại bỏ dấu từ filter input
    const normalizedSearchQuery = this.removeVietnameseAccents(strFilter.trim().toLowerCase());
    // Lọc các sản phẩm dựa trên từ khóa tìm kiếm
    const  handleFilter = filterItems.filter((i) => {
      return (
        this.removeVietnameseAccents(i.tenSP.toLowerCase()).includes(normalizedSearchQuery) ||
        this.removeVietnameseAccents(i.mtChung.toLowerCase()).includes(normalizedSearchQuery) ||
        this.removeVietnameseAccents(i.phanLoai.toLowerCase()).includes(normalizedSearchQuery)
      // i.tenSP.toLowerCase().includes(this.state.strFilter.trim().toLowerCase())
        // || i.mtChung.toLowerCase().includes(this.state.strFilter.trim().toLowerCase())
        // || i.phanLoai.toLowerCase().includes(this.state.strFilter.trim().toLowerCase())
        //|| i.khoangGia.toLowerCase().includes(this.state.strFilter.toLowerCase())
        //|| i.thongSo.toLowerCase().includes(this.state.strFilter.toLowerCase())
        //|| i.giaLoai.toLowerCase().includes(this.state.strFilter.toLowerCase())
        //|| i.huongDan.toLowerCase().trim().includes(this.state.strFilter.toLowerCase()) split() split('')
      );
      
    }); 
    
    return (
      <div  className='container container-body'>
        {/* Open header: header/control = menu + filter + search */}
        {/* FillterFillter */}
        <div className='row justify-content-md-center' >
          <div className='col-sm'>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                    <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
                  </svg>
                </span>

                <input 
                type="text" className="form-control" 
                placeholder="Nhập tìm kiếm hoặc chọn các mục gợi ý..." aria-label="Tìm kiếm" 
                aria-describedby="addon-wrapping"
                name="filter"
                list="datalistOptions" id="exampleDataList"
                value={strFilter}
                onChange = {this.onChangeFilter} 
                /> 

                <datalist  id="datalistOptions">
                  {/* <option value="Lược chải tóc"/>
                  <option value="Lược mát xa"/>
                  <option value="Mát xa mặt"/>
                  <option value="Mát xa cổ vai gáy"/>
                  <option value="Mát xa toàn thân"/>
                  <option value="Day và bấm huyệt"/>
                  <option value="Trang sức"/>
                  <option value="Dịch vụ gói quà"/>
                  <option value="Quà tặng cho khách hàng"/> */}
                  {this.state.suggestions.map((item, index) => (
                  <option key={index} value={item}/>
                  ))} 
                </datalist>
                {/* <div class="btn-group btn-group-toggle" onChange = {this.onChangeFilter} data-toggle="buttons">
                  <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autocomplete="off"  value="Luoc 5 rang" checked/> Active
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2"  value={strFilter}  autocomplete="off"/> Radio
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3"  value={strFilter} autocomplete="off"/> Radio
                  </label>
                </div> */}
        
                
                <button 
                onClick={this.onClickClear} 
                className="btn btn-outline-secondary" 
                type="button" id="button-addon2"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
                </button>
                {/* data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Làm mới!" */}

                {/* <div class="input-group">
                  <select value={strFilter}
                    onChange = {this.onChangeFilter} 
                    className="form-select" id="inputGroupSelect01">
                    <option selected>Chọn theo mục gọi ý...</option>
                    <option value="luoc 5">Option 1</option>
                    <option value="bạch tuộc">Option 2</option>
                    <option value="yen">Option 3</option>
                  </select>
                </div> */}

                {/* {filteredSuggestions.map((item, index) => (
                  <li key={index} className="search-item">{item}</li>
                ))} */}

               
            </div> 
          </div>
        </div>
        {/* End header */}
        
        {/*Open body: list all products and list products by search/choice and fillter  */}
        {items.length === 0 ? (
          <div>không có sản phẩm nào trong danh sách</div>
        ):(
          <div>
            {handleFilter.length === 0 ? (
            <div className='no-products'>
              <i>
                Các sản phẩm liên quan tới " {strFilter} "  . Tìm thấy 0 sản phẩm.
                <br/>Không thể tìm thấy sản phẩm, hãy thử tìm kiếm lại nhé!
              </i>
            </div>
          ):(
            <>
            <br/>
            <div className='p-1'>Danh sách các sản phẩm/ Tìm thấy {handleFilter.length} sản phẩm</div>
            <ListProductsComponent items={handleFilter} strFilter={strFilter}/>
            </>
            
          )}

          </div>  
        )}
        {/*End body  */}
        
        {/*Open footer: text ordering instructions */}
        <NoticeIComponent/>
        {/*End  */}
      </div>
    );
  }
}

export default ProductComponent;