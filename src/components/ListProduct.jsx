import React, { useState } from 'react';
import './style/ListProduct.css';
import GroupFilterListProduct from './GroupFilterListProduct';
import ItemProduct from './ItemProduct';

const ListProduct = () => {
  const currentCate = JSON.parse(localStorage.getItem('category'));
  const listProduct = [
    {
      id: '1',
      thumbnail: 'vong-tay-1.jpg',
      nameProduct: 'Vòng Tay Vàng 18K Sang Trọng',
      description: 'Vòng tay vàng 18K với thiết kế tinh tế, thích hợp cho các dịp lễ tết, sự kiện sang trọng.',
      typeProduct: 'Trang sức',
      gender: 'Nữ',
      price: 10000000,
      listSize: [
        { size: 'S', quantity: 5 },
        { size: 'M', quantity: 10 },
        { size: 'L', quantity: 3 },
      ],
    },
    {
      id: '2',
      thumbnail: 'vong-tay-2.jpg',
      nameProduct: 'Vòng Tay Bạc Chạm Khắc',
      description: 'Vòng tay bạc tinh xảo, thiết kế chạm khắc hoa văn độc đáo, phù hợp cho các bạn yêu thích sự nhẹ nhàng và thanh thoát.',
      typeProduct: 'Trang sức',
      gender: 'Nữ',
      price: 10000000,
      listSize: [
        { size: 'M', quantity: 8 },
        { size: 'L', quantity: 12 },
        { size: 'XL', quantity: 7 },
      ],
    },
    {
      id: '3',
      thumbnail: 'vong-tay-3.jpg',
      nameProduct: 'Vòng Tay Đính Đá Cầu Vồng',
      description: 'Vòng tay đính đá cầu vồng với thiết kế bắt mắt, làm nổi bật sự sang trọng và quý phái.',
      typeProduct: 'Trang sức',
      gender: 'Nữ',
      price: 10000000,
      listSize: [
        { size: 'S', quantity: 15 },
        { size: 'M', quantity: 20 },
        { size: 'L', quantity: 10 },
      ],
    },
    {
      id: '4',
      thumbnail: 'vong-tay-4.jpg',
      nameProduct: 'Vòng Tay Charm Cao Cấp',
      description: 'Vòng tay charm cao cấp với các phụ kiện charm xinh xắn, tạo nên vẻ đẹp đầy cá tính và lạ mắt.',
      typeProduct: 'Trang sức',
      gender: 'Nam',
      price: 10000000,
      listSize: [
        { size: 'M', quantity: 6 },
        { size: 'L', quantity: 9 },
        { size: 'XL', quantity: 4 },
      ],
    },
    {
      id: '5',
      thumbnail: 'vong-tay-5.jpg',
      nameProduct: 'Vòng Tay Nam Đơn Giản',
      description: 'Vòng tay nam với thiết kế đơn giản nhưng sang trọng, thích hợp cho các dịp đi làm hay dạo phố.',
      typeProduct: 'Trang sức',
      gender: 'Nam',
      price: 10000000,
      listSize: [
        { size: 'M', quantity: 12 },
        { size: 'L', quantity: 14 },
        { size: 'XL', quantity: 5 },
      ],
    },
  ];

  // Hàm nhận dữ liệu từ component con
  const handleFilterChange = (updatedValues) => {
    console.log(updatedValues);
  };

  return (
    <div className='cate-container'>
      <div className="title-cate">
        <span className='title-line'></span>
        <span className='title-name'>{currentCate?.name}</span>
        <span className='title-line'></span>
      </div>

      <GroupFilterListProduct onFilterChange={handleFilterChange} />

      <div className="list-product-container">
        {listProduct.map((product, index) => (
          <ItemProduct key={index} pros={product} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
