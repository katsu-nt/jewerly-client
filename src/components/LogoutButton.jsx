import React from 'react';
import { useAuth } from '../context/authContext.jsx';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login')
    localStorage.clear();
  };

  return <div onClick={handleLogout}>Đăng xuất</div>;
};

export default LogoutButton;
