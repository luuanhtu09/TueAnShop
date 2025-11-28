import React, { Component } from 'react';
import '../../../styles/post-style.css';
class Post6Component extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }
  
  render() {
    //Cách bảo quản đò sừng
    
    return (
      <>
        <p>Lược chải tóc chế tác từ sừng trâu không chỉ là công cụ chăm sóc tóc hiệu quả
         mà còn là sản phẩm mang giá trị thẩm mỹ và truyền thống. 
         Tuy nhiên, để lược sừng trâu luôn bền đẹp và duy trì được công dụng
        tối ưu, việc vệ sinh và bảo quản đúng cách là vô cùng quan trọng. 
        Bài viết dưới đây sẽ hướng dẫn bạn cách vệ sinh và bảo quản lược chải tóc sừng trâu đúng cách để sử dụng lâu dài.
        </p>
      
      <div className="accordion" id="accordionExample6">
        {/* 11 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse61" aria-expanded="true" aria-controls="collapse61">
            <h6>Vì Sao Cần Vệ Sinh Và Bảo Quản Lược Sừng Trâu?</h6>
            </button>
          </h2>
          <div id="collapse61" className="accordion-collapse collapse show" data-bs-parent="#accordionExample6">
            <div className="accordion-body">
              <div>
              Bản chất của sừng cũng như tóc và móng tay chân chúng ta, 
              do đó nó cũng cần được bảo quản và chăm sóc để bền 
              và thời gian sử dụng được lâu dài hơn.
              <ol>
                <li><b>Duy Trì Độ Bền Và Hình Dáng</b> 
                  <br/>+ <i>Chất liệu tự nhiên cần được chăm sóc</i>: Sừng trâu là vật liệu tự nhiên, nếu không được bảo quản đúng cách, lược dễ bị cong vênh, nứt gãy hoặc xuống màu.
                  <br/>+ <i>Tăng tuổi thọ sản phẩm</i>: Việc bảo quản đúng cách giúp sản phẩm bền lâu, tránh hư hỏng do tác động của môi trường như độ ẩm hay nhiệt độ cao.
                </li>
                <li><b>Đảm Bảo Hiệu Quả Chăm Sóc Tóc</b>
                <br/>+ <i>Giữ tóc mượt mà</i>: Lược sừng trâu giúp giảm gãy rụng và hạn chế tĩnh điện, nhưng nếu bề mặt lược không được vệ sinh thường xuyên, hiệu quả này sẽ giảm đi.
                <br/>+ <i>Ngăn ngừa bụi bẩn và dầu thừa</i>: Sử dụng lược bẩn có thể khiến tóc dính bụi hoặc dầu, gây bết tóc và mất vệ sinh.
                </li>
                <li><b>Bảo Vệ Sức Khỏe Da Đầu</b>
                <br/>+ <i>Ngăn ngừa vi khuẩn</i>: Lược không được vệ sinh dễ tích tụ vi khuẩn, có thể gây kích ứng hoặc các bệnh về da đầu như nấm, gàu.
                <br/>+ <i>Đảm bảo an toàn khi sử dụng</i>: Một chiếc lược sạch sẽ bảo vệ da đầu khỏi nguy cơ nhiễm khuẩn hoặc kích ứng không mong muốn.
                </li>
                <li><b>Giữ Được Giá Trị Thẩm Mỹ</b>
                <br/>+ <i>Duy trì vẻ đẹp của sản phẩm</i>: Lược sừng trâu không chỉ là dụng cụ chăm sóc tóc mà còn mang giá trị thẩm mỹ cao. Vệ sinh và bảo quản đúng cách giúp lược giữ được vẻ bóng đẹp tự nhiên của sừng.
                <br/>+ <i>Thể hiện sự trân trọng sản phẩm thủ công</i>: Chăm sóc lược đúng cách là cách thể hiện sự tôn trọng với giá trị truyền thống và nghệ nhân chế tác.
                </li>
              </ol>
            </div>
            </div>
          </div>
        </div>
        {/* 22 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse62" aria-expanded="false" aria-controls="collapse62">
            <h6>Cách Bảo Quản Lược Chải Tóc Sừng Trâu</h6>
            </button>
          </h2>
          <div id="collapse62" className="accordion-collapse collapse" data-bs-parent="#accordionExample6">
            <div className="accordion-body">

              <ul>
                <li><b>Tránh Tiếp Xúc Với Nhiệt Độ Cao</b>
                <br/>Không để lược gần nguồn nhiệt như ánh nắng trực tiếp, máy sấy tóc, hoặc bếp lửa. Nhiệt độ cao có thể làm cong hoặc biến dạng lược.
                </li>
                <li><b>Để Lược Ở Nơi Thoáng Mát</b>
                <br/>Cất lược ở nơi khô ráo, thoáng mát, tránh môi trường ẩm ướt như nhà tắm để hạn chế tình trạng nấm mốc hoặc mục gỗ.
                <br/>Tuy nhiên cũng tránh để lược sừng ở những nơi quá khô hanh, dưới ánh nắng trược tiếp, dễ làm lược sừng bị khô.
                </li>
                <li><b>Bôi Dầu Để Dưỡng Lược</b>
                <br/>Thỉnh thoảng, bạn có thể bôi một lớp dầu dưỡng tự nhiên (dầu oliu hoặc dầu dừa) lên bề mặt lược để giữ độ bóng và mềm mại.
                <br/>Ngay trong khi bạn sử dụng, tinh chất dưỡng bạn dùng trên da cũng dưỡng lại đồ sừng, thế nên đặc điểm của đồ sừng là càng chăm dùng càng bóng đẹp.
                </li>
                <li><b>Sử Dụng Hộp Đựng Chuyên Dụng</b>
                <br/>Nếu không sử dụng thường xuyên, hãy cất lược vào hộp đựng hoặc túi vải để bảo vệ khỏi bụi bẩn, va đập hoặc để vào hộp nhựa kín tránh thoát độ ẩm, độ dầu sẵn có của sừngsừng.
                </li>
              </ul>
              <p>Nếu đồ sừng của bạn mua về có các đường vân thì đừng lo lắng.
                Bản chất của sừng sau nhiều năm phát triển tạo ra các lớp sừng trồng lên nhau.
                Khi gặp thời tiết khô hanh, trong quá trình sử dụng quá lâu không tránh khỏi vết nứt rạn.
                Hãy chăm chỉ sử dụng, bảo quản và bôi dưỡng định kì cho sừng, các vết rạn có thể sẽ liền lại do quá trình dãn nở và ngậm độ ẩm,
                và tránh các tác nhân làm giảm tuổi thọ của sừng nhé!
              </p>

            </div>

          </div>
        </div>
      </div>
      
      </>
    );
  }
}

export default Post6Component;