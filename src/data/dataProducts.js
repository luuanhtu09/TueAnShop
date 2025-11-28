const { v4: uuidv4 } = require('uuid');

// {
//     hinh1: 'SP001',
// },
// {
//     hinh2: 'SP002',
// },
// {
//     hinh3: 'SP003',
// },
// {
//     hinh4: 'SP004',
// }
// const uuidv4 = require('uuid/v4')
let items = [
    {
        id          : uuidv4(),
        maSP        : 'COH001',
        hinhAnh     : ['/photoPs/COH001_1.png', '/photoPs/COH001_2.png', '/photoPs/COH001_3.png', '/photoPs/COH001_4.png', '/photoPs/SP001_5.png', '/photoPs/COH001_6.png' ],
        tenSP       : 'Lược 5 răng cung tròn', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa bí năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm', 'Màu sắc: màu và vân tự nhiên, trắng nưa, nâu, đen, mỗi chiếc một màu.'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//1
    {
        id          : uuidv4(),
        maSP        : 'COH002',
        hinhAnh     : ['/photoPs/COH002_1.png', '/photoPs/COH002_2.png', '/photoPs/COH002_3.png', '/photoPs/COH002_4.png', '/photoPs/SP002_5.png', '/photoPs/COH002_6.png' ],
        tenSP       : 'Lược 5 răng yên ngựa', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//2
    {
        id          : uuidv4(),
        maSP        : 'COH003',
        hinhAnh     : ['/photoPs/COH003_1.png', '/photoPs/COH003_2.png', '/photoPs/COH003_3.png', '/photoPs/COH003_4.png', '/photoPs/SP003_5.png', '/photoPs/COH003_6.png' ],
        tenSP       : 'Lược 7 răng thưa', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//3
    {
        id          : uuidv4(),
        maSP        : 'COH004',
        hinhAnh     : ['/photoPs/COH004_1.png', '/photoPs/COH004_2.png', '/photoPs/COH004_3.png', '/photoPs/COH004_4.png', '/photoPs/SP004_5.png', '/photoPs/COH004_6.png' ],
        tenSP       : 'Bạch tuộc 5 tua', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//4
    {
        id          : uuidv4(),
        maSP        : 'COH005',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Nơm ống gió răng nhọn', 
        khoangGia   : '100.000-120.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//5
    {
        id          : uuidv4(),
        maSP        : 'COH006',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Nơm ống gió răng bản dày',
        khoangGia   : '150.000-220.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//6
    {
        id          : uuidv4(),
        maSP        : 'COH007',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Nơm bạch thuộc', 
        khoangGia   : '200.000-250.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//7
    {
        id          : uuidv4(),
        maSP        : 'COH008',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Trái tim sừng guasha VIP XL', 
        khoangGia   : '220.000-350.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//8
    {
        id          : uuidv4(),
        maSP        : 'COH009',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Trái tim sừng guasha L', 
        khoangGia   : '150.000-200.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//9
    {
        id          : uuidv4(),
        maSP        : 'COH010',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Trái tim cạo gió', 
        khoangGia   : '85.000-100.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//10
    {
        id          : uuidv4(),
        maSP        : 'COH011',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Vuông cạo gió', 
        khoangGia   : '85.000-100.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//11
    {
        id          : uuidv4(),
        maSP        : 'COH012',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Bút gạch bạch huyết', 
        khoangGia   : '75.000-120.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//12
    {
        id          : uuidv4(),
        maSP        : 'COH013',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Đao bi cạo mắt', 
        khoangGia   : '85.000-150.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//13
    {
        id          : uuidv4(),
        maSP        : 'COH014',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Cây gùi xà cầy xẻ', 
        khoangGia   : '180.000-270.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//14
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Cây gùi cạo gió', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//15
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Cây gùi day huyệt', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//16
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Bàn gãi lưng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//17
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Bàn gãi lưng mát  VIP', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//18
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Lược răng thưa', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//19
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Lược đuôi chuột', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//20
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Sên xoắn bọ cạp', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//20
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Sên dẹt tai thỏ', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//20




    // sừng trâu trắng
     {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Lược đuôi chuột Trâu trắng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//21
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Lược 5 răng sên Trâu trắng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//22
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Gạch bạch huyết Trâu trắng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//23
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Thanh chải huyệt Trâu trắng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//24
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Trái tim guasha Trâu trắng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//25
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Miếng chải mini Trâu trắng', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//26


    //
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Búa ngải cứu', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//26
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Gối ngải cứu', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//26


    //
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Dây buộc tóc lụa', 
        khoangGia   : '85.000-110.000 VNđ',
        mtChung     : 'Lược mát xa đa năng có công dụng chải tóc; mát xa đầu, mặt, cổ vai gáy; bấm huyệt lưu thông khí huyết,...',
        phanLoai    : 'Lược, Mát xa',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//26


    //
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Quà tặng cho khách hàng!!!', 
        khoangGia   : '0 VNđ',
        mtChung     : 'Quà tặng ngẫu nhiên hoặc tự lựa chọn trị giá lên tới 100K với đơn đầu tiên hoặc có giá trị từ 299K',
        phanLoai    : 'Quà tặng',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//26
    {
        id          : uuidv4(),
        maSP        : 'COH015',
        hinhAnh     : ['/photoPs/COH005_1.png', '/photoPs/COH005_2.png', '/photoPs/COH005_3.png', '/photoPs/COH005_4.png', '/photoPs/SP005_5.png', '/photoPs/COH005_6.png' ],
        tenSP       : 'Dịch vụ gói quà tặng!!!', 
        khoangGia   : '50.000 - 150.000 VNđ',
        mtChung     : 'Gói quà gồm: hộp quà, giấy độn, thiệp. theo lựa chọn',
        phanLoai    : 'Quà tặng',     
        thongSo     : ['CDxCR: 12cmx5.5cm' , 'Độ dày: từ 0.3cm đến 1cm'],
        giaPK       : ['PK 1: độ dày từ 0.3-0.6cm. Giá: 85.000VNđ'  , 'PK 2: độ dày từ 0.7-1cm. Giá: 110.000VNđ'],
        congDung   : 'luoc sung lang thuy ung luoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ungluoc sung lang thuy ung',
        linkVideo   : 'https://www.youtube.com/',
    },//26
];
let currentPage = 1;
let productsPerPage = 4; // Số sản phẩm hiển thị trên mỗi trang

export default items;
    