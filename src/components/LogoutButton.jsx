import React from 'react';
import { useAuth } from '../context/authContext.jsx';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.clear();
  };

  return <div onClick={handleLogout}>Đăng xuất</div>;
};

export default LogoutButton;
