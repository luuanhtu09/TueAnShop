import React, { Component } from 'react';
// import '../../../styles/post-style.css';
class Post1Component extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
      
    }
  }
  
  
  render() {
  //Giới thiệu thương hiệu
    
    return (
      <>
        <p className='text-center'>
          <b><i>&emsp;“Khi chúng tôi tìm được thấy tình yêu ở trong Thân và Tâm của chính mình,
            sự bình yên không đâu xa mà nó ở ngay đây, lúc này!”
          </i></b>
        </p>
        <p>Xin chào quý đọc giả và các khách hàng thân mến!</p>
        <p>Là một người xuất phát từ tình yêu đối với sức khỏe tinh thần, qua những lần tìm hiểu chính bản thân mình tôi nhận ra: 
          <i> "để có sức khỏe tâm trí tốt, cần có một cơ thể khỏe mạnh,
          và để có một cơ thể khỏe mạnh chúng ta cũng cần yêu thương tâm trí của chính mình".
          </i> 
        </p>
        <p>Quãng thời gian qua, Tuệ An và những người bạn của Tuệ An đã khai thác chính những tài nguyên sẵn có bởi cái duyên trời cho: chính là cái "nghề" - cái nghề mà ông cha ta đã để lại cho những con người làng nghề nói riêng và toàn thể những người Việt nói chung.</p>
        <p>Tuệ An may mắn được trực tiếp thừa kế giá trị truyền thống nơi làng nghề. Bên cạnh đó nắm bắt được xu hướng và mong muốn về sức khỏe của người Việt. Từ đó, đem trong mình một sứ mệnh và nung nấu đem sứ mệnh của mình đi xa hơn.</p>
        {/* <div className='clearfix'>
          <img src='/photoPost/photobai1.jpg' className='col-md-6 float-md-start mb-3 me-md-3'></img>
         
          <p>Là một người con làng nghề lược sừng Thụy Ứng - là làng nghề lược sừng nổi tiếng từ đời xa xưa và làng nghề lược sừng duy nhất tại miền Bắc.
            Tuệ An đem chính sản phẩm nhà mình ra để chia sẻ và mong muốn các sản phẩm nơi làng nghề của mình được biết đến nhiều hơn với các giá trị tuyệt vời về lĩnh vực chăm sóc sức khỏe thể chất, tinh thần; giá trị tâm linh, giá trị nghệ thuật cũng như giá trị cho môi trường sống của con người.
          </p>
          <p>Tuệ An cung cấp các sản phẩm từ sừng như: lược sừng, dụng cụ mát xa - diện chuẩn bằng sừng, trang sức, đồ gia dụng, … </p>
          <p>Tuệ An không muốn chỉ dừng lại ở việc đem đến cho các bạn sản phẩm mà còn là sự đồng hành để bạn có thể chạm hết vào các giá trị của sản phẩm đó có thể mang lại.</p>
         </div> */}

         <div className='box-detail'>
          <div className='hinhanh'>
          <img src={process.env.PUBLIC_URL + '/photoPost/photobai1.jpg'} className=''></img>
         
          </div>
          <div className='noidung'>
          <p>Là một người con làng nghề lược sừng Thụy Ứng - là làng nghề lược sừng nổi tiếng từ đời xa xưa và làng nghề lược sừng duy nhất tại miền Bắc.
            Tuệ An đem chính sản phẩm nhà mình ra để chia sẻ và mong muốn các sản phẩm nơi làng nghề của mình được biết đến nhiều hơn với các giá trị tuyệt vời về lĩnh vực chăm sóc sức khỏe thể chất, tinh thần; giá trị tâm linh, giá trị nghệ thuật cũng như giá trị cho môi trường sống của con người.
          </p>
          <p>Tuệ An cung cấp các sản phẩm từ sừng như: lược sừng, dụng cụ mát xa - diện chuẩn bằng sừng, trang sức, đồ gia dụng, … </p>
          <p>Tuệ An không muốn chỉ dừng lại ở việc đem đến cho các bạn sản phẩm mà còn là sự đồng hành để bạn có thể chạm hết vào các giá trị của sản phẩm đó có thể mang lại.</p>
         
          </div>
         </div>
         
       
        <div>
          <b>Chúng tôi cam kết “sản phẩm tốt và dịch vụ tốt” qua 3 thông điệp trong sứ mệnh cũng là 3 lời hứa:</b>
          <ol>
            <li>
              Chăm sóc Sức khỏe của người Việt bằng những sản phẩm chất lượng từ chính bàn tay người Việt làm ra.          
            </li>
            <li>
              Đồng hành cùng khách hàng như một người bạn sử dụng sản phẩm và cảm nhận sống trong từng phút giây.
            </li>
            <li>
              Duy trì và phát triển các nghề truyền thống thủ công mỹ nghệ tại các vùng quê Việt Nam.
            </li>
          </ol>
        </div>

        <div>
          <b>Để hoàn thành tốt sứ mệnh cùng thời đại số. Tuệ An cung cáp các giải phápp dịch vụ mạng xã hội để cung cấp thông tin sản phẩm, dịch vụ mua bán và dịch vụ khách hàng như sau:</b>
          
          <ol>
            <li><i>Facebook: "Tuệ An Official"</i> -  là nơi chính thức Tuệ An cập nhật thường xuyên. Cung cấp thông tin về doanh nghiệp, sản phẩm và các chương trình khuyến mãi,...</li>
            <li><i>Messenger Facebook: "Tuệ An Official"</i> -  là nơi chính thức Tuệ An cung cấp dịch vụ tư vấn sản phẩm và đặt hàng. </li>
            <li><i>Groub Facebook:"Tuệ An Healthy Group"</i> - là cộng đồng các khách hàng đã sử dụng sản phẩm của Tuệ An, với mục đích kết nối và thúc đẩy sự đồng hành hàng ngày cùng nhau chăm sóc sức khỏe. Bên cạnh đó có cả những chương trình khuyến mãi cực lớn.</li>
            <li><i>Website: "Tuệ An"</i> - cung cấp thông tin chi tiết về doanh nghiệp, sản phẩm và các bài viết.</li>
            <li><i>Youtube: "Tuệ An Official"</i> - nơi cung cấp các video giới thiệu, hướng đẫn sử dụng sản phẩm và các bài tập miễn phí.</li>
            <li>Ngoài ra khách hàng có thể liên hệ qua <i>Zalo</i> hoặc <i>Số điện thoại</i>: <i>0869 349 985</i> để được tư vấn và đặt hàng.</li>
          </ol>
        </div>
        <p>Tuệ An luôn đặt khách hàng là trung tâm và hướng đến sự phát triển bền vững trong tương lai. Cảm ơn bạn đã tin tưởng và lựa chọn Tuệ An!</p>
        
      </>
    );
  }
}

export default Post1Component;