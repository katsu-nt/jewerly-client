import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HeaderCategory from './HeaderCategory';
import './style/HeaderClient.css'
import logo from '../assets/VLogo_LiLi_Horizontal_Premium-1.svg';
import LogoutButton from './LogoutButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useCart } from '../context/cartContext.jsx';
import { useEffect } from 'react';
export default function HeaderClient() {
    // Lấy giá trị role từ localStorage
    const role = localStorage.getItem('role');
    const account = JSON.parse(localStorage.getItem('account'));
    const cartCaching = JSON.parse(localStorage.getItem('cart'));
    const [quantityInCart, setQuantityInCart] = useState(0)
    const { user, cart, setUser, setCart } = useCart()

    useEffect(() => {
        if (account && !user) {
            setUser(account);
        }
        if (cartCaching && !cart) {
            setCart(cartCaching);
        }
    }, [user, cart, setUser, setCart]);  // Ensure we don't update if user or cart is already set

    useEffect(() => {
        // Update quantityInCart based on cart state
        if (cart && cart.items && cart.items.length > 0) {
            let countQuantity = 0;
            cart.items.forEach((item) => {
                countQuantity += item.quantity;
            });
            setQuantityInCart(countQuantity);
        } else {
            setQuantityInCart(0);
        }
    }, [cart]); 

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    // Hàm dùng để mở giỏ hàng
    const openCart = () => {
        if (account) {

        }
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={quantityInCart} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>

                            <div className='current-account' onClick={() => openAccountDetail()}>
                                <i className="fa-solid fa-user"></i>
                                <div className='name'>Xin chào: {account.name}</div>
                            </div>

                            <div style={{ borderLeft: '1px solid #000', paddingLeft: '8px', cursor: 'pointer' }}><LogoutButton /></div>
                        </div>
                        :
                        <Button className='button-login' color="inherit"><Link style={{ textDecoration: 'none', color: '#000' }} to="/login">Đăng nhập</Link></Button>}
                </div>
            </div>

            <br />
            <HeaderCategory />
        </div>
    );
}
