import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/HeaderCategory.css';

// Mock data cho các category
const listCategories = [
  { id: 1, name: 'Vòng - Lắc', link: '/vong-lac' },
  { id: 2, name: 'Nhẫn', link: '/nhan' },
  { id: 3, name: 'Dây chuyền', link: '/day-chuyen' },
  { id: 4, name: 'Bông tai', link: '/bong-tai' },
  { id: 5, name: 'Khuyên xỏ', link: '/khuyen-xo' },
  { id: 6, name: 'Trang sức đôi', link: '/trang-suc-doi' },
  { id: 7, name: 'Phong thủy', link: '/phong-thuy' },
  { id: 8, name: 'Quà tặng', link: '/qua-tang' },
  { id: 9, name: 'Phụ kiện', link: '/phu-kien' },
];

const HeaderCategory = () => {
  // State để lưu trữ danh sách category
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Lấy dữ liệu mock khi component được mount
  useEffect(() => {
    // Giả lập API call
    setCategories(listCategories);
  }, []);

  // Hàm được thực hiện khi chọn 1 category
  const onClickCategory = (cate) => {
    navigate(cate.link);
    localStorage.setItem('category', JSON.stringify(cate));
  }

  return (
    <div style={{
      display: 'flex',
      padding: '10px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #c60018',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
      {categories.map((category) => (
        <div
          className='category-item'
          key={category.id}
          style={{
            margin: '0 15px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontSize: '14px',
            fontWeight: '500'
          }}
          onClick={() => onClickCategory(category)} // Xử lý khi click vào danh mục
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default HeaderCategory;
