import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HeaderCategory from './HeaderCategory';
import './style/HeaderClient.css'
import logo from '../assets/VLogo_LiLi_Horizontal_Premium-1.svg';
import LogoutButton from './LogoutButton';

export default function HeaderClient() {
    // Lấy giá trị role từ localStorage
    const role = localStorage.getItem('role');
    const account = JSON.parse(localStorage.getItem('account'));

    // Hàm dùng để mở giỏ hàng
    const openCart = () => {
        alert('Mở giỏ hàng');
    }

    // Hàm dùng để mở quản lý thông tin cá nhân
    const openAccountDetail = () => {
        alert('Mở quản lý thông tin cá nhân');
    }

    return (
        <div className='header-client'>
            <div className='header-logo'>
                <Link className='img-logo' to="/trang-chu">
                    <img src={logo} alt="" />
                </Link>

                <div className='group-button'>
                    {account
                        ?
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <div className='cart'>
                                <i onClick={() => openCart()} className="fa-solid fa-basket-shopping"></i>
                            </div>

                            <div className='current-account' onClick={() => openAccountDetail()}>
                                <i className="fa-solid fa-user"></i>
                                <div className='name'>Xin chào: {account.name}</div>
                            </div>

                            <div style={{borderLeft: '1px solid #000', paddingLeft: '8px', cursor: 'pointer'}}><LogoutButton/></div>
                        </div>
                        :
                        <Button className='button-login' color="inherit"><Link style={{textDecoration: 'none', color: '#000'}} to="/login">Đăng nhập</Link></Button>}
                </div>
            </div>

            <br />
            {/* Kiểm tra role và hiển thị HeaderCategory */}
            {role === 'user' && <HeaderCategory />}
        </div>
    );
}
