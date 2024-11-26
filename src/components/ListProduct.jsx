import React, { useEffect, useState } from 'react';
import './style/ListProduct.css';
import GroupFilterListProduct from './GroupFilterListProduct';
import ItemProduct from './ItemProduct';
import { getProductByFilter } from "../APIs/MyProductApi";

const ListProduct = () => {
  const currentCate = JSON.parse(localStorage.getItem('category'));
  const [listProductByCate, setListProductByCate] = useState(
    JSON.parse(localStorage.getItem('listProductByFilter')) || []
  );   
  // console.log(listProductByCate)
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
  const handleFilterChange = async (updatedValues) => {
    console.log(updatedValues);
    let valueGender = '';
    let valueMin = 0;
    let valueMax = 0;
    if (updatedValues.gender !== 0 && updatedValues.gender !== "") {
      if (updatedValues.gender == 1) {
        valueGender = 'Nam';
      } else {
        valueGender = 'Nữ';
      }
    } else {
      valueGender = null;
    }

    if (updatedValues.rangePrice !== 0 && updatedValues.rangePrice !== "") {
      if (updatedValues.rangePrice == 1) {
        valueMin = null;
        valueMax = 1500000;

      } else if (updatedValues.rangePrice == 2) {
        valueMin = 1500000;
        valueMax = 3000000;
      } else if (updatedValues.rangePrice == 3) {
        valueMin = 3000000;
        valueMax = 5000000;
      } else if (updatedValues.rangePrice == 4) {
        valueMin = 5000000;
        valueMax = null;
      } else {
        valueMin = null;
        valueMax = null;
      }
    }

      const filters = {
        typeProduct: currentCate.name,
        gender: valueGender,
        minPrice: valueMin,
        maxPrice: valueMax,
        nameProduct: updatedValues.valueSearch,
      };

      const products = await getProductByFilter(filters);
      setListProductByCate(products);

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
          {listProductByCate.map((product, index) => (
            <ItemProduct key={index} pros={product} />
          ))}
        </div>
      </div>
    );
  };

  export default ListProduct;
