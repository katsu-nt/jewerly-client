import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const GroupFilterListProduct = ({ onFilterChange }) => {
    const [valueFilter, setValueFilter] = useState({
        size: '',
        gender: '',
        rangePrice: '',
        valueSearch: '',
    });

    // Hàm nhận dữ liệu từ component con và cập nhật state
    const handleValueChange = (e, type) => {
        const { value } = e.target;  // Lấy giá trị mới từ sự kiện
        const updatedValues = { [type]: value }; // Tạo đối tượng có key là type và value là giá trị mới

        // Cập nhật giá trị mới trong state valueFilter
        setValueFilter((prev) => ({
            ...prev,
            ...updatedValues,
        }));

        // Gọi hàm onFilterChange để truyền toàn bộ object valueFilter lên component cha
        if (onFilterChange) {
            onFilterChange({
                ...valueFilter,  // Truyền toàn bộ object valueFilter cũ
                ...updatedValues, // Cập nhật trường thay đổi
            });
        }
    };

    return (
        <div className="filter-product-container" style={{marginTop: '30px'}}>
            {/* Kích thước */}
            <FormControl sx={{ m: 1 }} id="select-size" size="small">
                <InputLabel id="demo-select-size-label" style={{ color: '#000' }}>Kích thước</InputLabel>
                <Select
                    labelId="demo-select-size-label"
                    value={valueFilter.size}
                    label="Kích thước"
                    onChange={(e) => handleValueChange(e, 'size')}  // Truyền đúng key vào đây
                >
                    <MenuItem value={'M'}>Size M</MenuItem>
                    <MenuItem value={'L'}>Size L</MenuItem>
                    <MenuItem value={'XL'}>Size XL</MenuItem>
                </Select>
            </FormControl>

            {/* Giới tính */}
            <FormControl sx={{ m: 1 }} id="select-gender" size="small">
                <InputLabel id="demo-select-gender-label" style={{ color: '#000' }}>Giới tính</InputLabel>
                <Select
                    labelId="demo-select-gender-label"
                    value={valueFilter.gender}
                    label="Giới tính"
                    onChange={(e) => handleValueChange(e, 'gender')}  // Truyền đúng key vào đây
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
                    value={valueFilter.rangePrice}
                    label="Khoảng giá"
                    onChange={(e) => handleValueChange(e, 'rangePrice')}  // Truyền đúng key vào đây
                >
                    <MenuItem value={1}>Dưới 1.500.000</MenuItem>
                    <MenuItem value={2}>1.500.000 - 3.000.000</MenuItem>
                    <MenuItem value={3}>3.000.000 - 5.000.000</MenuItem>
                    <MenuItem value={4}>Trên 5.000.000</MenuItem>
                </Select>
            </FormControl>

            {/* Tìm kiếm */}
            <input
                id="text-search"
                type="text"
                value={valueFilter.valueSearch}
                onChange={(e) => handleValueChange(e, 'valueSearch')}  // Truyền đúng key vào đây
                placeholder="Tìm theo từ khóa..."
            />
        </div>
    );
};

export default GroupFilterListProduct;
