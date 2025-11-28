import React, { Component } from 'react';
import '../../../styles/post-style.css';
class Post3Component extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }
  
  render() {
  //Giới thiệu các khuyến mãi
    
    return (
      <>
      <img src='/photoPost/khuyen-mai.png' className=''></img>
        <div>
          <p>Hiện nay, các chương trình khuyến mãi dành cho sản phẩm lược sừng đang được triển khai 
            nhằm mang đến cơ hội tiết kiệm cho khách hàng. Khi mua lược sừng, 
            khách hàng có thể nhận được những ưu đãi hấp dẫn như giảm giá trực tiếp, 
            tặng kèm các sản phẩm chăm sóc tóc, hoặc miễn phí vận chuyển. 
            Các chương trình này thường xuyên diễn ra trong dịp lễ, tết hoặc khi ra mắt mẫu mã mới, 
            giúp khách hàng không chỉ sở hữu những sản phẩm chăm sóc tóc chất lượng mà còn tiết kiệm chi phí. 
            Đặc biệt, một số chương trình còn áp dụng hình thức mua 1 tặng 1 hoặc giảm giá khi mua số lượng lớn, 
            tạo cơ hội cho người tiêu dùng tận hưởng nhiều lợi ích hơn.
          </p>
          <b>Một cố chương trình khuyến mãi cố định:</b>
            <ul>
              <li>Freeship cho tất cả khách hàng tại Tuệ An có đơn hàng từ 500.000VNđ - 5.000.000VNđ</li>
              <li>Ngoài ra còn các chương trình khuyến mãi, quà tặng cực lớn vào các ngày lễ, tết, các ngày kỉ niệm,... lên đến 50% giá trị sản phẩm</li>
            </ul>

          
          <b>Đặc biệt và đặc quyền cho thành viên trong group "Tuệ An Healthy Group" trên Facebook :</b>
            <ul>
              <li>Đối tượng là các khách hàng đã mua sản phẩm của Tuệ An ngay từ đơn hàng đầu tiên.</li>
              <li>Trong đây, không những là cộng đồng người dùng sản phẩm giúp đỡ nhau duy trì lối sống tập luyện, chia sẻ các bài tập hay, chuyên sâu mà còn
              có những chương trình quà tặng, giảm giá, mini game cực thú vị do Tuệ An tổ chức để tri ân khách hàng đã ủng hộ Tuệ An.</li>
            </ul>   
        </div>
      </>
    );
  }
}

export default Post3Component;