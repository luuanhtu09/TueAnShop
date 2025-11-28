import React, { Component } from 'react';
import '../../styles/post-style.css';
import Post1Component from './Sub-Post/post1_GT';
import Post2Component from './Sub-Post/post2_SPCD';
import Post3Component from './Sub-Post/post3_CTKM';
import Post4Component from './Sub-Post/post4_HDDH';
import Post5Component from './Sub-Post/post5_Youtube';
import Post6Component from './Sub-Post/post6_BQDS';
import Post7Component from './Sub-Post/post7_TDTB';
class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: '',
      
      posts: [
        {
          postid: '1',
          img   : process.env.PUBLIC_URL + '/photoPost/photobai1.jpg',
          name  : 'Giới thiệu về Tuệ An',
          decrip: 'Bén duyên và được kế thừa sản phẩm từ nơi quê nhà, cùng niềm yêu thương sức khỏe của chính mình từ đó muốn chia sẻ và lan tỏa. Tuệ An biết được rằng "để có sức khỏe tâm trí tốt, cần có một cơ thể khỏe mạnh, và để có một cơ thể khỏe mạnh chúng ta cũng cần yêu thương tâm trí của chính mình"...',
        },
        {
          postid: '2',
          img   : process.env.PUBLIC_URL + '/photoPost/photobai2.jpg',
          name  : 'Sản phẩm bằng sừng và công dụng của sừng',
          decrip: 'Làng nghề lược sừng Thụy Ứng, nằm ở xã Hòa Bình, huyện Thường Tín, Hà Nội, nổi tiếng với nghề chế tác lược sừng truyền thống. Từ những khúc sừng tự nhiên, qua bàn tay khéo léo và sáng tạo của các nghệ nhân, những sản phẩm lược sừng tinh xảo, độc đáo được ra đời, mang đậm giá trị văn hóa và mỹ thuật dân gian',
        },
        {
          postid: '3',
          img   : process.env.PUBLIC_URL + '/photoPost/photobai3.jpg',
          name  : 'Các chương trình khuyến mãi',
          decrip: 'Hiện nay, các chương trình khuyến mãi dành cho sản phẩm lược sừng đang được triển khai nhằm mang đến cơ hội tiết kiệm cho khách hàng. Khi mua lược sừng, khách hàng có thể nhận được những ưu đãi hấp dẫn như giảm giá trực tiếp, tặng kèm các sản phẩm chăm sóc tóc, hoặc miễn phí vận chuyển.',
        },
        {
          postid: '4',
          img   : process.env.PUBLIC_URL + '/photoPost/photobai4.jpg',
          name  : 'Hướng dẫn đặt hàng',
          decrip: 'Trang web này chỉ cung cấp các thông tin chi tiết về sản phẩm, để đặt hàng và tư vấn chi tiết, xin vui lòng nhắn qua Page Facbook Tuệ An để được tư vấn ngay lập tức nhé!',
        },
        {
          postid: '5',
          img   : process.env.PUBLIC_URL + '/photoPost/photobai5.png',
          name  : 'Kênh Youtube và hướng dẫn tra video bài tập',
          decrip: 'Để nhằm mục đích đồng hành cùng khách hàng trải nghiệm sản phẩm. Chúng tôi đăng tải các video tập luyện và hướng dẫn chi tiết để giúp bạn nâng cao và cải sức khỏe. Hãy tham gia, đăng ký kênh để nhận được các bài tập mới nhất!',
        },
        {
          postid: '6',
          img   : process.env.PUBLIC_URL + '/photoPost/photobai6.png',
          name  : 'Đồ sừng có cần bảo quản không? Hướng dẫn bảo quản đồ sừng?',
          decrip: 'Lược chải tóc chế tác từ sừng trâu không chỉ là công cụ chăm sóc tóc hiệu quả mà còn là sản phẩm mang giá trị thẩm mỹ và truyền thống. Tuy nhiên, để lược sừng trâu luôn bền đẹp và duy trì được công dụng tối ưu, việc vệ sinh và bảo quản đúng cách là vô cùng quan trọng.',
        },
        {
          postid: '7',
          img   : process.env.PUBLIC_URL + "photoPost/photobai7.jpg",
          name  : 'Trâu bạc - Trâu trắng - Trâu hồng - Trâu đen ?',
          decrip: 'Trâu bạc, trâu trắng, trâu hồng là trâu gì? Trâu bạc tốt hơn trâu đen không? Lược sừng, đồ diện chuẩn sừng bây giờ được làm bằng sừng trâu gì? nó là sừng trâu ta hay sừng trâu nhập ngoại? Trâu bạc này là Trâu bạc ở Việt Nam hay trâu bạc nhập khẩu?',
        },

    ]
    }
  }
  // handleCatchPost = (i) =>{
  //   //console.log('show id4', i.tenSP);
  //   this.setState({id: i.postid});
  // }
  render() {
    const {posts, id} = this.state;
    // console.log('show id4', id);
    return (
      <>
        <div className="container container-body">
          <h3>Bài đăng</h3>
          {/*1. tìm kiếm bài viết */}
          {/*2. danh sách các bài đăng  */}
          {/* start box list */}
          
          <div className="box-list">
            {posts.map(item => (
            <>
              <div className='box-item'>
                <div className='row'>
                  <div className='col-2'>
                    <img src={item.img} className="hinhnen" alt="..." />
                  </div>
                  <div className='col-10'>
                    <b className='tieu-de'>{item.postid}. </b>
                    <a href="#" data-bs-toggle="modal" data-bs-target={"#myModal"+ item.postid}>
                      <b className='tieu-de'>{item.name}</b>
                    </a>
                    <p>{item.decrip}</p>
                  </div>
                  {/* <div className='col'>
                    <buton type="button"
                    className="btn btn-light mr-1" 
                    data-bs-toggle="modal" data-bs-target={"#myModal"+ item.postid}
                     >
                      Xem thêm
                    </buton>
                  </div> */}
                </div>
              </div>
            </>
          ))}
          </div>
          
          {/* end box list */}
        </div>
        {/* start switch case modal open post_sttstt */}
        {posts.map(item => (
          <>
            
            <div className="modal app" id={"myModal"+ item.postid}>
              <div className="modal-dialog modal-xl modal-xl">
                <div className="modal-content">
                    {/* start header modal */}
                    <div className="modal-header">
                      <h6 className='m-1'>{item.postid}. {item.name}</h6>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    {/* end header modal */}
                    {/* start body modal */}
                    <div className="modal-body">

                     {(() => {
                        switch(item.postid) {
                          case '1': return <Post1Component/>;
                          case '2': return <Post2Component/>;
                          case '3': return <Post3Component/>;
                          case '4': return <Post4Component/>;
                          case '5': return <Post5Component/>;
                          case '6': return <Post6Component/>;
                          case '7': return <Post7Component/>;
                          default: return null;  
                        }
                    })()}
                        
                    </div>
                    {/* end body modal */}
                </div>
              </div>
            </div>
            
          </>
        ))}
        {/* end switch case modal */} 
          
          
      </>
    );
  }
}

export default PostComponent;