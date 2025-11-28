import React, { Component } from 'react';
import '../../../styles/post-style.css';
class Post4Component extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }
  
  render() {
    //hướng dẫn đặt hàng
    
    return (
      <>
      <div className='box-detail'>
        <div className='hinhanh'>
          <img src={process.env.PUBLIC_URL + '/photoPost/huong-dan-mua-hang.jpg'} className=''></img>
        </div>
        <div className='noidung'></div>
      </div>
      <h6>Hướng dẫn đặt hàng trên Facebook</h6>
      <p>Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi! Để đặt hàng, vui lòng làm theo các bước dưới đây:</p>
      <ol>
        <li>Xem thông tin sản phẩm: 
          <p>Truy cập vào trang web của chúng tôi để tham khảo chi tiết về các sản phẩm sừng.</p>
        </li>
        <li>Chọn sản phẩm yêu thích: 
          <p>Sau khi tìm hiểu về sản phẩm, nếu bạn muốn đặt mua, hãy nhấn vào nút "Đặt hàng".</p>
        </li>
        <li>Chuyển đến Facebook Messenger: 
          <p>Sau khi nhấn vào nút "Đặt hàng", bạn sẽ được chuyển hướng đến Facebook Messenger. 
          Đây là nơi bạn có thể liên hệ trực tiếp với chúng tôi.</p>
        </li>
        <li>Gửi tin nhắn qua Messenger: 
          <p>Trong tin nhắn, hãy nhắn mã hoặc tên sản phẩm bạn quan tâm/muốn mua để được tư vấn thêm. 
          Sau đó bạn chốt sản phẩm, hãy xác nhận và cung cấp cho chúng tôi:</p>
          <ul>
            <li>Tên sản phẩm, kích thước, loại</li>
            <li>Tên, Số điện thoại, Địa chỉ giao hàng</li>
          </ul>
          <p>Chúng tôi sẽ xác nhận đơn hàng và hướng dẫn bạn cách thanh toán.</p>
        </li>
        <li>Chờ xác nhận và giao hàng: 
          <p>Sau khi nhận được thông tin từ bạn, chúng tôi sẽ xác nhận đơn hàng và tiến hành giao hàng tận nơi.</p>
        </li>
      </ol>
      <p>Nếu bạn gặp bất kỳ vấn đề nào trong quá trình đặt hàng, đừng ngần ngại liên hệ với chúng tôi qua Facebook Messenger để được hỗ trợ ngay lập tức!</p>
      <div>Link Facebook, mess, sddt, zalo</div>
      </>
    );
  }
}

export default Post4Component;