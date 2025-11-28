import React, { Component } from 'react';
import '../../../styles/post-style.css';
class Post2Component extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }
  
  render() {
  //Giới thiệu sản phẩm và công dụng của sừng
    
    return (
      <>
      <img src='' className=''></img>
        <div className='text-center'>
          <p>“Hỡi cô thắt áo lưng xanh</p>
          <p>Có về Thụy Ứng với anh thì về</p>
          <p>Thụy Ứng có nghiệp có nghề</p>
          <p>Có ao tắm mát có nghề lược thưa”</p>
        </div>
        <div className="accordion" id="accordionExample">
          {/* 11 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h6>Làng nghề lược sừng và các phẩm phẩm</h6>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p><strong>Làng nghề lược sừng Thụy Ứng</strong>, nằm ở xã Hòa Bình, huyện Thường Tín, Hà Nội, nổi tiếng với nghề chế tác lược sừng truyền thống. 
                  Từ những khúc sừng tự nhiên, qua bàn tay khéo léo và sáng tạo của các nghệ nhân,
                  những sản phẩm lược sừng tinh xảo, độc đáo được ra đời, mang đậm giá trị văn hóa và mỹ thuật dân gian. 
                  Làng nghề không chỉ thu hút khách du lịch trong nước mà còn quốc tế, 
                  bởi nét đẹp độc đáo và sự tỉ mỉ trong từng sản phẩm.
                </p>
                <p>Sừng trâu bò, với đặc tính bền và dễ chế tác, được sử dụng để tạo ra nhiều sản phẩm mỹ nghệ độc đáo. Một số sản phẩm phổ biến từ sừng trâu bò bao gồm:</p>
                <ul>
                  <li>Lược sừng: Đây là sản phẩm đặc trưng của làng nghề Thụy Ứng, với các loại lược nhỏ, lược to, lược cắt tóc, có tính thẩm mỹ cao và tốt cho tóc.</li>
                  <li>Dụng cụ trang trí: Các nghệ nhân cũng tạo ra các sản phẩm trang trí như móc áo, khung ảnh, tượng nhỏ, hay đồ trang sức.</li>
                  <li>Dụng cụ chăm sóc sức khỏe: dụng cụ mát xa, diện chuẩn,... tốt cho sức khỏe, thân thiện với cơ thể, không gây tĩnh điện,... </li>
                  <li>Bút, đũa, và các đồ dùng cá nhân: Các vật dụng này không chỉ đẹp mà còn bền, sử dụng sừng trâu bò để làm các bộ bút, đũa hay những món đồ tinh xảo khác.</li>
                  <li>Đồ gia dụng: Sừng cũng được dùng để làm đồ gia dụng như cốc, chén, thìa, dao kéo, mang tính chất mỹ thuật cao, bền và dễ lau chùi.</li>
                  <li>Chìa khóa, nút áo, vòng tay: Một số sản phẩm như chìa khóa, nút áo, vòng tay được chế tác từ sừng trâu bò với kiểu dáng đa dạng, tinh tế.</li>
                </ul>
                <p>Mỗi sản phẩm đều được chế tác tỉ mỉ, giữ được vẻ đẹp tự nhiên và giá trị thẩm mỹ cao, là sự kết hợp tuyệt vời giữa truyền thống và sáng tạo.</p>
              </div>
            </div>
          </div>
          {/* 22 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h6>Công dụng của các sản phẩm được chế tác bằng sừng</h6>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Giá trị trong y học.</strong>
                <p>
                Lược sừng, đặc biệt là lược sừng trâu bò, được biết đến không chỉ vì tính thẩm mỹ mà còn vì những công dụng có lợi đối với sức khỏe, đặc biệt trong y học cổ truyền. Một số công dụng chính của lược sừng đối với y học bao gồm:
                </p>
                <ul>
                  <li>Tốt cho tóc và da đầu: Lược sừng giúp kích thích tuần hoàn máu trên da đầu, giúp tóc mọc khỏe mạnh và giảm tình trạng rụng tóc. Sử dụng lược sừng thường xuyên giúp tóc mềm mượt, ít xơ rối và ít bị gãy.</li>
                  <li>Giảm căng thẳng, mệt mỏi: Khi sử dụng lược sừng để chải đầu, những động tác nhẹ nhàng tác động lên các huyệt đạo trên đầu, giúp thư giãn, giảm căng thẳng và mệt mỏi, đồng thời giúp tinh thần thoải mái.</li>
                  <li>Cải thiện lưu thông máu: Lược sừng giúp kích thích các điểm huyệt trên da đầu, cải thiện lưu thông máu, làm giảm cảm giác đau nhức, mỏi cổ, đồng thời có thể hỗ trợ giảm đau đầu, chóng mặt.</li>
                  <li>Hỗ trợ chữa một số bệnh về da đầu: Một số người tin rằng sử dụng lược sừng có thể giúp làm giảm ngứa da đầu, gàu và viêm da đầu nhờ khả năng chống vi khuẩn tự nhiên của sừng.</li>
                  <li>Không gây tĩnh điện: So với lược nhựa, lược sừng không tạo ra tĩnh điện, giúp hạn chế tình trạng tóc bị bết dính hoặc mất độ bóng do các tác động của điện tích.</li>
                </ul>
                <strong>Giá trị văn hóa tâm linh và phong thủy</strong>
                <p>Trong tâm linh và phong thủy, lược sừng cũng được xem là một vật phẩm có ý nghĩa đặc biệt. 
                  Dưới đây là một số quan niệm phổ biến về công dụng của lược sừng trong phong thủy:
                </p>
                <ul>
                  <li>**Thu hút tài lộc và may mắn**: Theo nhiều quan niệm trong phong thủy, lược sừng, đặc biệt là lược sừng trâu bò, mang lại sự thịnh vượng và tài lộc cho gia chủ. Việc sử dụng lược sừng giúp cân bằng năng lượng và thu hút vượng khí, từ đó mang lại may mắn trong công việc và cuộc sống.</li>
                  <li>**Bảo vệ sức khỏe và tinh thần**: Lược sừng được cho là có khả năng bảo vệ chủ nhân khỏi các năng lượng xấu, mang đến sự bình an và sức khỏe tốt. Trong một số nền văn hóa, người ta tin rằng lược sừng giúp giảm bớt tà khí, ngăn ngừa các bệnh tật từ năng lượng tiêu cực.</li>
                  <li>**Tăng cường mối quan hệ và hòa hợp gia đình**: Một số người tin rằng lược sừng giúp tăng cường sự hòa hợp trong các mối quan hệ gia đình, bạn bè. Việc sử dụng lược sừng sẽ giúp các mối quan hệ trở nên suôn sẻ và thuận lợi, giảm bớt sự căng thẳng, xung đột.</li>
                  <li>**Cải thiện vận mệnh**: Lược sừng cũng được cho là giúp cải thiện vận mệnh của người sử dụng. Việc chải tóc bằng lược sừng không chỉ có tác dụng thư giãn mà còn giúp tinh thần minh mẫn, làm tăng khả năng tập trung và đưa ra quyết định sáng suốt trong cuộc sống.</li>
                  <li>**Tác dụng điều hòa âm dương**: Lược sừng, khi sử dụng đúng cách, được cho là giúp điều hòa âm dương, cân bằng các yếu tố trong cơ thể và môi trường sống, mang lại sự hài hòa cho người sử dụng.</li>
                </ul>
                <p>Dù không có bằng chứng khoa học cụ thể, nhưng trong nhiều nền văn hóa, lược sừng vẫn được coi là một vật phẩm quý giá có tác dụng phong thủy tốt, giúp gia chủ thu hút vận may, bảo vệ sức khỏe và mang lại bình an.</p>


                <strong>Đối với môi trường</strong>
                <p>Lược sừng là một lựa chọn thân thiện với môi trường vì được làm từ nguyên liệu tự nhiên, có thể tái chế và phân hủy được. So với các loại lược nhựa, lược sừng có nhiều điểm mạnh trong việc bảo vệ thiên nhiên:</p>
                <ul>
                  <li>Nguyên liệu tự nhiên và bền vững: Sừng trâu bò, nguyên liệu chính để chế tác lược sừng, là sản phẩm phụ từ chăn nuôi, giúp tận dụng nguồn tài nguyên có sẵn mà không gây hại cho môi trường.</li>
                  <li>Không gây ô nhiễm nhựa: Lược sừng giúp giảm thiểu việc sử dụng nhựa, một trong những nguyên nhân chính gây ô nhiễm môi trường. Lược nhựa không phân hủy dễ dàng, dẫn đến tích tụ rác thải nhựa lâu dài trong tự nhiên, trong khi lược sừng hoàn toàn tự nhiên và phân hủy được.</li>
                  <li>Độ bền cao: Lược sừng có độ bền lâu dài, giúp giảm lượng rác thải từ các sản phẩm phải thay thế thường xuyên như lược nhựa. Điều này góp phần giảm thiểu tác động tiêu cực đến môi trường từ việc sản xuất và vứt bỏ đồ dùng nhựa.</li>
                  <li>Tiết kiệm tài nguyên: Việc sản xuất lược sừng không đòi hỏi nguyên liệu hay hóa chất độc hại như một số loại lược khác, giúp bảo vệ tài nguyên thiên nhiên và giảm thiểu ô nhiễm trong quá trình sản xuất.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 33 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h6>So sánh lược sừng với các loại, nhựa, kim loại, gỗ, đá.</h6>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lược sừng nổi bật so với các loại lược khác nhờ vào nhiều ưu điểm vượt trội, đặc biệt là trong việc chăm sóc tóc và sức khỏe:</p>
                <b>**Lược sừng vs. Lược nhựa**:</b>
                  <ul>
                    <li>- **Lược sừng** không gây tĩnh điện, giúp tóc mềm mượt, giảm gãy rụng, trong khi **lược nhựa** dễ tạo ra tĩnh điện, làm tóc khô, dễ xơ rối và gãy.</li>
                    <li>- **Lược sừng** được làm từ nguyên liệu tự nhiên, thân thiện với môi trường, trong khi **lược nhựa** lại là sản phẩm khó phân hủy, góp phần làm tăng lượng rác thải nhựa.</li>
                  </ul>
                <b>**Lược sừng vs. Lược kim loại**: </b>
                  <ul>
                    <li>- **Lược sừng** nhẹ nhàng với tóc và da đầu, giúp kích thích tuần hoàn máu mà không gây đau đớn hay tổn thương da đầu, trong khi **lược kim loại** có thể làm tổn thương da đầu và tóc nếu sử dụng không cẩn thận.</li>
                    <li>- **Lược sừng** không bị oxy hóa hay gỉ sét như **lược kim loại**, giúp duy trì độ bền lâu dài mà không cần phải lo ngại về việc hư hại.</li>
                  </ul>

                <b>**Lược sừng vs. Lược gỗ**:</b>
                  <ul>
                    <li>- **Lược sừng** có độ bền cao hơn, ít bị nứt hay vỡ nếu rơi, trong khi **lược gỗ** có thể dễ dàng bị hỏng khi tiếp xúc với nước hoặc bị va đập mạnh.</li>
                    <li>- **Lược sừng** mang lại sự tinh tế và vẻ đẹp sang trọng, trong khi **lược gỗ** có thể không có độ bóng và vẻ đẹp tự nhiên như sừng.</li>
                  </ul>
                <b>**Lược sừng vs. Lược đá**:</b>
                  <ul>
                    <li>- **Lược sừng** nhẹ nhàng, dễ dàng mang theo và sử dụng hàng ngày, trong khi **lược đá** có trọng lượng nặng, dễ vỡ và không tiện lợi khi di chuyển.</li>
                    <li>- **Lược sừng** không chỉ bền mà còn thân thiện với tóc, giúp tóc trở nên mượt mà và khỏe mạnh, trong khi **lược đá** có thể khó sử dụng và dễ gây vỡ khi rơi.</li>
                  </ul>
                <p> Lược sừng không chỉ là một sản phẩm đẹp và bền, mà còn rất tốt cho tóc và sức khỏe, giúp cân bằng năng lượng và bảo vệ môi trường. Với những ưu điểm vượt trội về tính năng, độ bền, và khả năng chăm sóc tóc, lược sừng là lựa chọn lý tưởng cho những ai tìm kiếm sự tinh tế và hiệu quả trong việc chăm sóc tóc.</p>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
}

export default Post2Component;