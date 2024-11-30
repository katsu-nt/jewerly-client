import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/DetailProduct.css';

// mock data breadcrum
const mocListBreadCrum = [
  { id: 1, name: 'Trang chủ', link: '/trang-chu' },
  { id: 2, name: 'Vòng-Lắc', link: '/vong-lac' },
  { id: 3, name: 'Lắc tay bạc nữ mạ bạch kim đính đá CZ cỏ 4 lá LILI_612672', link: '/bong-tai' },
];

// mock data product
const mockItemProduct =
{
  thumbnail: 'https://lili.vn/wp-content/uploads/2021/12/Lac-tay-bac-nu-ma-bach-kim-dinh-pha-le-co-bon-la-LILI_612672_34-400x400.jpg',
  nameProduct: 'Lắc tay bạc nữ mạ bạch kim đính đá CZ cỏ 4 lá LILI_612672',
  description: 'Chiếc lắc được làm từ bạc 925 mạ bạch kim đính 2 viên đá Cubic Zirconia được chế tác tỉ mỉ. Với thiết kế hình cỏ bốn lá thống nhất khoe trọn vẻ đẹp nữ tính, rạng rỡ của người đeo nên thường được phái mạnh sử dụng làm món quà bất ngờ và vô cùng ý nghĩa cho nàng như lời gửi gắm, truyền tải những tâm tư và tình cảm chân thành dành cho nàng.',
  typeProduct: 'Vòng - Lắc',
  gender: 'Nữ',
  price: 816000,
  listSize: [
    { size: 'M', quantity: 8 },
    { size: 'L', quantity: 12 },
    { size: 'XL', quantity: 7 },
  ],
}


export default function DetailProduct() {
  const codeProduct = JSON.parse(localStorage.getItem('CodeProduct'));
  const [listBreadCrum, setlistBreadCrum] = useState([]);
  const [itemProduct, setItemProduct] = useState();
  const [quantitySize, setQuantitySize] = useState(null);
  const [indexButtonSelected, setIndexButton] = useState(null);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const currentProduct = JSON.parse(localStorage.getItem('current-product'));
  
    if (currentProduct) {
      setItemProduct(currentProduct); 

      // Cập nhật mocListBreadCrum với thông tin sản phẩm hiện tại
      const updatedBreadCrum = [...mocListBreadCrum];
      updatedBreadCrum[2] = {
        ...updatedBreadCrum[2],
        name: currentProduct.nameProduct,
        link: window.location.pathname, // URL hiện tại
      };
      setlistBreadCrum(updatedBreadCrum);
    }
  }, []);

  const onClickCategory = (cate) => {
    navigate(cate.link);
    localStorage.setItem('category', JSON.stringify(cate));
  };

  // Hàm xử lý khi bấm vào kích thước
  const handleSizeClick = (quantity, index) => {
    setQuantitySize(quantity);
    setIndexButton((preIndex) => (preIndex === index ? null : index));
    if (indexButtonSelected == index) {
      setQuantitySize(null);
    }
    setCount(1);
  };

  // Hàm giảm số
  const decrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // Hàm tăng số
  const increase = () => {
    if(count < quantitySize){
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className='detail-page'>
      <div className='box-detail-product'>
        <div className='list-breadcrum'>
          <i className="fa-solid fa-house"></i>
          {listBreadCrum.map((breadCrum, index) => (
            <div className='box-breadcrum' key={breadCrum.id}>
              <div className='item-breadcrum' onClick={() => onClickCategory(breadCrum)}>
                {breadCrum.name}
              </div>
              {index < listBreadCrum.length - 1 && (
                <i className="fa-solid fa-chevron-right"></i>
              )}
            </div>
          ))}
        </div>

        {itemProduct && (
          <div className='block-info-detail'>
            <div className='block-images'>
              <img src={itemProduct.imageUrl} alt={itemProduct.nameProduct}></img>
            </div>
            <div className='block-info'>
              <div className='block-name'>
                <span className='name-product'>{itemProduct.nameProduct}</span>
              </div>
              <div className='block-description'>
                <span className='description-product'>{itemProduct.description}</span>
              </div>
              <div className='block-price'>
                <span className='price-product'>{itemProduct.price.toLocaleString('vi-VN')}
                  <span style={{ textDecoration: 'underline' }}>đ</span>
                </span>
              </div>
              <div className='block-size'>
                <span className='text-size'>Kích thước</span>
                <div className='block-size-item'>
                  {itemProduct.listSize.map((size, index) => (
                    <div key={index}>
                      <button
                        className={`size-item ${indexButtonSelected === index ? 'active' : ''}`}
                        onClick={() => handleSizeClick(size.quantity, index)}>
                        {size.size}
                      </button>
                    </div>
                  ))}
                </div>
                {quantitySize && (
                  <span className='quantity'>Số lượng: {quantitySize}</span>
                )}
              </div>

                <div className='block-add-cart'>
                  <div className='box-choose-quantity'>
                    <button className='btn-decrease' onClick={decrease}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span >{count}</span>
                    <button className='btn-increase' onClick={increase}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <button className='btn-add-to-cart'>THÊM VÀO GIỎ HÀNG</button>
                  <button className='btn-call'>GỌI TƯ VẤN MIỄN PHÍ</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}