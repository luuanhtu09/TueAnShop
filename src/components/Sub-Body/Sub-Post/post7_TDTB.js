import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/post-style.css';
class Post7Component extends Component {
  constructor(props) {
    super(props);
    this.state ={
      img1 : process.env.PUBLIC_URL + '/photoPost/photobai7-1.jfif',
    }
  }
  
  render() {
    //Cách bảo quản đò sừng
    const {img1}= this.state;
    return (
      <>
      <p>Vừa qua Tuệ An nhận được rất nhiều câu hỏi như:
        <ol>
          <li>Trâu bạc, trâu trắng, trâu hồng là trâu gì?
            Trâu bạc tốt hơn trâu đen không?
          </li>
          <li>Lược sừng, đồ diện chuẩn sừng bây giờ được làm bằng sừng trâu gì?
              nó là sừng trâu ta hay sừng trâu nhập ngoại?
          </li>
          <li>Trâu bạc này là Trâu bạc ở Việt Nam hay trâu bạc nhập khẩu?</li>
          <li>Có người nói rằng Sừng trâu bạc là sừng con trâu già tuổi, có đúng hay không?</li>
        </ol>
      </p>
      <p>Hãy cùng Tuệ An đi khám phá về sừng trâu nhé!</p>
      
       {/* khái niệm về trâu đen và trâu bạc */}
        <div>
          {/* Trâu đen */}
          <h6>Trâu đen?</h6>
          <p>&emsp;
            <i>"Trâu đen"</i> là cách gọi chỉ con trâu có màu lông đen. 
            Trâu là một loài động vật thuộc họ Bovidae, 
            có thể sống ở nhiều vùng nông thôn và được sử dụng phổ biến trong nông nghiệp, 
            đặc biệt là trong việc cày ruộng. 
            Màu lông của trâu có thể thay đổi, 
            nhưng trâu đen thường có màu lông chủ yếu là màu đen hoặc xám đen.
          </p>
          <div className ='box-detail'>
          <div className='hinhanh'>
          <img src={img1} className=''></img>
         
          </div>
          {/* Trâu bạc */}
          <div className='noidung'>
            
            <h6>Trâu bạc - trâu trắng - trâu hồng</h6>
              <p>&emsp;
              <i>"Trâu bạc, trâu trắng, hay trâu hồng"</i> thực chất đều là những  
              <i> con trâu mắc chứng bạch tạng</i> - 
              một tình trạng hiếm gặp khiến chúng thiếu hụt sắc tố melanin trong cơ thể.
              Điều này dẫn đến da chúng trở nên biến dị, nên da không có sắc tố đen và trở thành trắng.
              Đặc biệt, đôi mắt của những con trâu này có thể có màu đỏ hoặc sáng, do thiếu melanin trong mắt. 
              <br/>Trâu bạch tạng không chỉ hiếm mà còn thu hút sự chú ý nhờ vẻ ngoài đặc biệt và độc đáo. 
              Tùy vào vùng miền và đất nước khác nhau, mà có nơi quan hiệm trâu trâu trắng là điểm gở “Trâu trắng đến đâu, mất mùa đến đấy”.  
              Tuy nhiên có nhiều nơi coi "Trâu Trắng" là một giống trâu quý đem lại nhiều may mắn, tiền bạc mà còn là hình ảnh của sự tình nghĩa, trong sáng.
              <br/>&emsp;Khi mắc căn bệnh này tùy vào thể trạng của từng con mà có lớp da trắng, hoặc trắng hồng, 
              lông của chúng có màu trắng, trắng bạc lấp lánh, nên thường được gọi là trâu bạc, trâu hồng, trâu trắng.
              Một số con trâu mắc bệnh bạch tạng nhưng không hoàn toàn, nên chúng cũng có những mảng loang màu đen như trâu thường.
              Một điểm thú vị nữa là do sự ảnh hưởng của bệnh bạch tạng, nên cặp sừng của chúng cũng mang những đặc điểm riêng biệt, 
              khác hẳn với những con trâu bình thường.
              </p>
          </div>
        </div>
        </div>
        <b>Hãy cùng Tuệ An tiếp tục xem rằng sừng trâu bạc khác gì sừng trâu đen thông thường nhé!</b>
        {/* So sánh sừng trâu bạc và sừng trâu đen */}
        <div>
        Sừng của trâu bạc (hay trâu bạch tạng) và sừng trâu thường có một số khác biệt nổi bật, 
        chủ yếu do ảnh hưởng của chứng bạch tạng và các đặc điểm di truyền khác. Cụ thể:
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Trâu bạc</th>
                <th scope="col">Trâu thường</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Màu sắc</th>
                <td>Sừng trâu bạc thường có màu sắc nhạt hơn so với sừng trâu thường. 
                  Vì trâu bạch tạng thiếu sắc tố melanin, sừng của chúng có thể có màu sáng, ngả vàng nhạt, 
                  hoặc có ánh kim, ánh bạc. 
                  Đôi khi sừng có thể mờ, không rõ rệt như sừng của trâu bình thường.
                </td>
                <td>
                Sừng trâu thường thường có màu đen hoặc nâu sẫm, đặc trưng của trâu khỏe mạnh, 
                với sắc tố melanin đầy đủ. 
                Sừng của chúng thường có màu sắc rõ ràng, mạnh mẽ hơn.
                </td>
              </tr>
              <tr>
                <th scope="row">Kết cấu và độ bóng</th>
                <td>
                Sừng trâu bạc có thể có kết cấu mềm hơn hoặc mịn màng hơn, vì thiếu sắc tố melanin, 
                sừng này có thể thiếu đi độ bóng tự nhiên hoặc có một lớp ánh kim nhẹ.
                </td>
                <td>
                Sừng trâu thường thường có kết cấu rắn chắc, cứng cáp và bóng bẩy hơn, 
                do ảnh hưởng của sắc tố melanin. 
                Sừng có thể có các đường vân hoặc màu sắc thay đổi tùy theo tuổi và điều kiện sống của trâu.
                </td>
              </tr>
              <tr>
                <th scope="row">Màu sắc</th>
                <td>
                Sừng trâu bạc có thể có hình dáng khác biệt, 
                đôi khi hơi cong nhẹ hoặc thẳng hơn, 
                do sự phát triển không hoàn toàn giống như sừng của trâu thường.
                Sừng của trâu bạch tạng có thể mảnh và ít phát triển về chiều rộng.
                </td>
                <td>
                Sừng trâu thường thường phát triển mạnh mẽ, cong đều và có thể rộng hơn, 
                tạo nên một vẻ ngoài cứng cáp, đặc trưng cho những con trâu bình thường.
                </td>
              </tr>
              <tr>
              <th  scope="row">Tuổi thọ</th>
                <td colSpan='2'>theo ... tuổi thọ của trâu đen và trâu bạch tạng đều từ 15-20 năm.
                  Ngoài ra còn phụ thuộc vào một số điều kiện sống khác.
                  Nên không thể nói rằng trâu bạc sống lâu hơn, mà là con trâu nào được nuôi và sống được lâu hơn.
                  Về thực tế, tất cả loài vật bị bạch tạng đều yếu hơn so với loại thường.

                </td>
              </tr>
              <tr>
              <th  scope="row">Giá thành</th>
                <td >
                  Theo quan niệm về sự hiếm gặp của trâu bạc, kéo theo đó là sự săn lùng như một món đồ quý hiếm.
                  Giá thành của trâu bạc cũng cao hơn rất nhiều so với trâu đen thông thường.
                </td>
                <td >
                  Do trâu đen là loại trâu bình thường, không quá hiếm để tìm.
                  Người buôn bán cũng cạnh tranh về số lượng nên giá cả vừa phải ở mức phổ thông.
                </td>
              </tr>
              
              <tr>
                <th  scope="row">Trong Y học Đông Y</th>
                <td colSpan='2'>Trong các sách về Đông dược hiện đại, sừng trâu được xếp
          vào loại thuốc thanh nhiệt lương huyết, cùng với sinh 
          địa hoàng, huyền sâm, mẫu đơn bì, tử thảo... 
          Theo Đông y, sừng trâu vị đắng, tính hàn, có tác dụng
           thanh nhiệt, giải độc, lương huyết; dùng chữa
          ôn bệnh sốt cao, hôn mê nói nhảm, kinh phong điên cuồng</td>
              </tr>
            </tbody>
          </table>
          <p>&emsp;
            Những đặc điểm này không phải lúc nào cũng rõ rệt, 
          vì mỗi con trâu bạch tạng có thể có sự phát triển và hình dáng sừng khác nhau, 
          nhưng nhìn chung, sừng trâu bạc sẽ nhẹ nhàng và có màu sắc khác biệt so với 
          sừng của những con trâu thông thường.
          </p>
        </div>
        {/* Các chế phẩm của sừng trâu được làm từ trâu gì */}
        <div>
          <h6>Trâu ta - Trâu ngoại</h6>
          <p>Hiện nay, do nhu cầu nhập khẩu tại ngước ngoài quá lớn, nguồn trâu trong nước không cung cấp đủ cho các làng nghề, 
            do đó tại các làng nghề thường nhập sừng trâu tại Châu Phi - nơi có ngồn sừng trâu dồi dào 
            để về tạo ra các sản phẩm lược, đồ mỹ nghệ, đồ diện chuẩn, gia dụng, ....
            Các sản phẩm này, sau đó được đem bán trong nước, đem xuất khẩu ra các nước 
            châu Á như: Trung Quốc, Nhật, Đài Loan, ... và cả các nước châu Âu và Châu Mỹ. 
          </p>
          <p>Tại các làng nghề, chế tác các sản phẩm sừng từ Châu Phi là nhiều nhưng 
            vẫn có cả châu ta Việt Nam.
            Tuy nhiên, sừng trâu ta và các sản phẩm của sừng trâu ta 
            có giá thành cao hơn do số lượng ít.
            Mặt khác, sừng trâu phi nhập khẩu có độ bền kém hơn trâu ta, 
            vì do trâu ta nước ta là giống trâu Việt,
            được nuôi dưỡng và sinh sống tại Việt Nam nên thích nghi được trong điều kiện khí hậu nước ta.
            Nhưng nếu xuất khẩu sừng trâu ta của chúng ta qua nước khác, 
            thì vấn đề khí hậu ảnh hưởng tới độ bền của sản phẩm 
            cũng như sản phẩm làm từ sừng Châu phi ở Việt Nam vậy.
            Vấn đề độ bền này không đáng báo động vì đặc điểm của đồ sừng là càng dùng càng bóng đẹp, 
            do đó chúng ta có thể bảo quản đồ sừng một cách dễ dàng bằng cách chăm chỉ dùng 
            và bôi dầu dưỡng ẩm vào những ngày hanh khô để kéo dài tuổi thọ của sừng.
          </p>
          {/* trâu bạc ta bạc phi */}
          <b>Trâu bạc là trâu ta Việt Nam hay trâu ở Châu Phi?</b>
          <p>Như trên Tuệ An đã giới thiệu về Trâu Bạc - chỉ là con trâu mắc chứng bạch tạng hoặc các bệnh liên quan đến thiếu hụt sắc tố melanin.
            Do đó, nó bất kì con trâu nào cũng có thể mắc bệnh không phân biệt vùng miền hay đất nước.
            Hoàn toàn có những chiếc sừng từ con trâu bạch tạng được nhập từ Châu Phi.
          </p>
          <p>Các bạn không phải lo lắng, vì khi được nhập từ trong nước hay nước ngoài, 
            thì những người làng nghề đã phân loại chúng theo: 
            sừng trâu nhập khẩu, sừng trâu Châu Phi, sừng trâu ta Việt Nam, 
            sừng trâu đen, sừng trâu bạc, 
            sừng trâu đực, trâu cái, 
            phân theo độ tuổi, màu sắc, kích cỡ, ... để tiện cho công việc chế tác sản phẩm. 
            Và kèm theo đó, giá thành của các phân loại cũng sẽ khác nhau.
          </p>
          <p>Do việc phân loại này, giúp đưa ra đa dạng sản phẩm, cũng như đưa ra các phân khúc sản phẩm tiếp cận được tất cả các tệp khách hàng.
          </p>
          <p>Tại Tuệ An, các sản phẩm được làm từ sừng như: sừng trâu Châu Phi, trâu ta, trâu đen và trâu bạc.
            Các sản phẩm luôn được chú thích rõ ràng để khách hàng có thể
             nắm rõ được loại, phân khúc và giá thành của từng sản phẩm.
          </p>
        </div>
        {/* Một số nguồn khác */}
        <div>
          <b>Một số nguồn khác:</b>
          <p>
          "Sừng trâu bạc" còn là tên gọi của những chiếc sừng của những con trâu 
          trưởng thành sống lâu năm, có tuổi đời cao.
          Vì tuổi đời cao, nên loại sừng này có độ bền cao, màu sắc và kết cấu đặc trưng, 
          mang lại nhiều lợi ích  vượt trội trong chăm sóc sức khỏe,
           đặc biệt là trong các liệu pháp massage, cạo gió và làm đẹp.
           Đặc tính tự nhiên: Sừng trâu bạc thường có màu sắc từ đen tuyền đến xám bạc, vân sừng rõ nét, độ bóng tự nhiên cao.
           Giá trị ứng dụng: Được chế tác thành dụng cụ massage, lược sừng, hoặc đồ thủ công mỹ nghệ.
          </p>
          <p>
            Theo một số nguồn khác, Sừng trâu trắng tốt hơn do chúng sống lâu hơn, khỏe hơn,...
            nên về mặt dược học như chứa nhiều dương khí hơn,...
            
            Nhưng về thực tế, tùy vào thể trạng và tuổi đời của con trâu mà ta đem lên đong đếm về giá trị thẩm mỹ lẫn dược học của chiếc sừng. 
            
            <br/>Để tìm một cặp sừng chất lượng, cứ không phải là trâu bạch tạng thì mới tốt mà là trâu đó có lâu năm không?
            Thực hư có phải như vậy hay chỉ là do những con trâu trắng hiếm hơn, tần suất xuất hiện ít hơn những con trâu đen
            mà người ta nâng tầm giá trị của chúng lên cao hơn?
            <br/>Hiện tại, cũng có một số tổ chức lên tiếng về việc do theo nhiều quan niệm về trâu bạc 
            nên giống trâu này trở nên quý hiếm và rất muốn được sưu tập da, sừng, làm đồ trang trí và làm thuốc.
            Điều này đe dọa đến giống trâu bạc, cũng giống như việc cả một con tê giác bị giết chỉ vì để lấy một chiếc sừng.
          </p>
          <p>Kết luận, có thể hiểu sừng trâu bạc tùy theo quan niệm của một số tổ chức, cá nhân.</p>
          <p> Để dễ phân biệt hơn tại mỗi sản phẩm tại Tuệ An sẽ được chú thích rõ ràng: chú thích "Sừng trâu" là các sừng trâu phổ biến nói chung được cho từ những con trâu đen.
             chú thích "Sừng trâu bạc" là loại sừng được cho từ con trâu trắng - trâu bạch tạng.
          </p>
        </div>
        {/* Lời nhắn kết bài */}
        <div>
          <p><i>
            Hãy để sừng trâu là một món quà, 
            cái mà sau nhiều quá trình chúng ta tận dụng chúng để biến chúng thành 
            một cuộc đời mới có ích cho những sinh vật sau còn sống. 
            Dùng cho chức khỏe tốt hơn, để sống tốt hơn, cảm nhận và biết ơn chúng mỗi khi bạn sử dụng!
          </i></p>
          <p className='text-center'><i>
            Do đó, Tuệ An muốn nhấn mạnh rằng: việc mình dùng sừng trâu vào mục đích sức khỏe, 
            cũng không nên có nhưng quan niệm thần thánh hóa.
            <br/>Hãy thư giãn để có thể chú ý đến cốt lõi của việc chăm sóc sức khỏe,
            <br/>Ở đây, chúng ta cần một sản phẩm hỗ trợ chứ không phải một sản phẩm đắt tiền mới có thể khỏe mạnh.
            <br/>Quan trọng nhất để cải thiện sức khỏe đó là phải chăm chỉ tập luyện. 
          </i></p>
        </div>
        {/* Tham khảo khác */}
        <div>Tuệ An hi vọng bài viết trên cung cấp được một số thông tin cơ bản về các loại sừng trâu hiện đang cung cấp trên thị trường và tại Tuệ An. 
          Nếu có bất kỳ đóng góp về kiến thức về các loại sừng trâu xin vui lòng liên hệ với Tuệ An. 
          Tuệ An xin trân thành cám ơn!
        </div>
        <div>
          <h6>Một số tham khảo khác:</h6>
          <p>
            <Link to='https://thanhnien.vn/chu-con-trau-mau-hong-khien-nguoi-sai-gon-ngac-nhien-ba-toi-mat-no-lay-quan-tai-1851039446.htm' target='blank'>
            Trâu hồng tại "Báo Thanh Niên"
            </Link>
          </p>
          <p>
            <Link to='https://mnistore.vn/blogs/news/hieu-dung-ve-sung-trau-bac-la-nhu-the-nao?srsltid=AfmBOoocwPyXULtLjaynhnLElqEiAxg7onP5chApeHO7flQx-rqRn0th' target='blank' >
            Hiểu đúng về Trâu bạc - tại "Báo MNiStore"
            </Link>
          </p>
          <p>
            <Link to='https://dantri.com.vn/lao-dong-viec-lam/la-mat-voi-dan-trau-trang-muot-mang-lai-co-nghiep-sung-tuc-cho-chu-nuoi-20211217135319280.htm' target='blank'>
            Đàn trâu trắngtrắng tại "Báo Dân trí"
            </Link>
          </p>
            <Link to='https://dongyhanoi.org/ThongtinhoatdongChitiet?id=3587' target='black'>
            Thay thế sừng tê giác bằng sừng trâu để chữ bệnh
            </Link>
        </div>

        
      </>
    );
  }
}

export default Post7Component;