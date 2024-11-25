import React, { useState } from 'react';
import './style/ListProduct.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const ListProduct = () => {
  const currentCate = JSON.parse(localStorage.getItem('category'));

  const [size, setSize] = useState(''); // State để lưu giá trị "Kích thước" được chọn
  const [gender, setGender] = useState(''); // State để lưu giá trị "Giới tính" được chọn
  const [rangePrice, setRangePrice] = useState(''); // State để lưu giá trị "Khoảng giá" được chọn
  const [textValue, setTextValue] = useState(''); // State để lưu giá trị của TextField

  // Hàm xử lý khi thay đổi giá trị của "Kích thước"
  const handleValueChange = (event, type) => {
    if (type == 'size') {
      setSize(event.target.value);
      return;
    }
    if (type == 'gender') {
      setGender(event.target.value);
      return;
    }
    if (type == 'range') {
      setRangePrice(event.target.value);
      return;
    }
    if (type == 'seach') {
      setTextValue(event.target.value);
      return;
    }
  };

  return (
    <div className='cate-container'>
      <div className="title-cate">
        <span className='title-line'></span>
        <span className='title-name'>{currentCate?.name}</span>
        <span className='title-line'></span>
      </div>

      <div className="filter-product-container">
        {/* Kích thước */}
        <FormControl sx={{ m: 1 }} id="select-size" size="small">
          <InputLabel id="demo-select-size-label" style={{ color: '#000' }}>Kích thước</InputLabel>
          <Select
            labelId="demo-select-size-label"
            value={size}
            label="Kích thước"
            onChange={(e) => handleValueChange(e, 'size')}
          >
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
          </Select>
        </FormControl>

        {/* Giới tính */}
        <FormControl sx={{ m: 1 }} id="select-gender" size="small">
          <InputLabel id="demo-select-gender-label" style={{ color: '#000' }}>Giới tính</InputLabel>
          <Select
            labelId="demo-select-gender-label"
            value={gender}
            label="Giới tính"
            onChange={(e) => handleValueChange(e, 'gender')}
          >
            <MenuItem value={1}>Nam</MenuItem>
            <MenuItem value={2}>Nữ</MenuItem>
          </Select>
        </FormControl>

        {/* Khoảng giá */}
        <FormControl sx={{ m: 1 }} id="select-range" size="small">
          <InputLabel id="demo-select-range-label" style={{ color: '#000' }}>Khoảng giá</InputLabel>
          <Select
            labelId="demo-select-range-label"
            value={rangePrice}
            label="Khoảng giá"
            onChange={(e) => handleValueChange(e, 'range')}
          >
            <MenuItem value={1}>Dưới 1.500.000</MenuItem>
            <MenuItem value={2}>1.500.000 - 3.000.000</MenuItem>
            <MenuItem value={3}>3.000.000 - 5.000.000</MenuItem>
            <MenuItem value={4}>Trên 5.000.000</MenuItem>
          </Select>
        </FormControl>

        {/* Tìm kiếm */}
        <input id='text-search' type="text" onChange={(e) => handleValueChange(e, 'search')} placeholder='Tìm theo từ khóa...' />
      </div>


      <div className="list-product-container">
        {/* Hiển thị các sản phẩm tại đây */}
      </div>
    </div>
  );
};

export default ListProduct;
