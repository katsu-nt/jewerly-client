import * as React from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import HeaderCategory from './HeaderCategory';
import './style/HeaderAdmin.css'
import logo from '../assets/VLogo_LiLi_Horizontal_Premium-1.svg';
import LogoutButton from './LogoutButton';

export default function HeaderAdmin() {
  // Lấy giá trị role từ localStorage
  const role = localStorage.getItem('role');
  const account = JSON.parse(localStorage.getItem('account'));
  const navigate = useNavigate();

  // Mock data cho các module
  const listModule = [
    { id: 1, name: 'Danh sách sản phẩm', link: '/quan-tri-danh-sach-san-pham' },
    { id: 2, name: 'Đơn hàng', link: '/quan-tri-don-hang' },
  ];

  // Hàm dùng để mở quản lý thông tin cá nhân
  const openAccountDetail = () => {
    // alert('Mở quản lý thông tin cá nhân');
  }

  // Hàm được thực hiện khi chọn 1 module
  const onClickModule = (module) => {
    navigate(module.link);
    localStorage.setItem('module', JSON.stringify(module));
  }

  return (
    <div className='header-admin'>
      <div className='header-logo'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <img className='img-logo' src={logo} alt="" />
          {listModule.map((module, index) => (
            <div className='item-module' id={index} onClick={() => onClickModule(module)}>{module.name}</div>
          ))}
        </div>

        <div className='group-button'>
          {account
            ?
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div>
                {role}
              </div>
              <div className='current-account' onClick={() => openAccountDetail()}>
                <i className="fa-solid fa-user"></i>
                <div className='name'>Xin chào: {account.name}</div>
              </div>

              <div style={{ borderLeft: '1px solid #000', paddingLeft: '8px', cursor: 'pointer' }}>
                <LogoutButton />
              </div>
            </div>
            :
            <div>
              <Button className='button-login' color="inherit">
                <Link style={{ textDecoration: 'none', color: '#000' }} to="/login">Đăng nhập</Link>
              </Button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
