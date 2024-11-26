import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../context/authContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import { login as SignIn } from "../APIs/MyUserApi.js"
import { getCart } from '../APIs/MyCartApi.js';
import { useCart } from "../context/cartContext.jsx"
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { user, cart, setUser, setCart } = useCart()
  const navigate = useNavigate();

  useEffect(() => {
    // If no user in localStorage, navigate to login page
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    const userRes = await SignIn({ email, password });
    if (!userRes) {
      setEmail("");
      setPassword("");
    } else {
      login(userRes.role);
      setUser(userRes);
      if (userRes.role === "user") {
        navigate('/');
      }
      if (userRes.role === "admin") {
        navigate('/admin');
      }
      
      // Store user without password
      let dataUser = { ...userRes, password: '********' };
      localStorage.setItem('account', JSON.stringify(dataUser));
      setCart(await getCart(userRes._id));
      localStorage.setItem('cart', JSON.stringify(await getCart(userRes._id)));
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '80px' }}>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>

        <div style={{ textAlign: "center", marginTop: '10px' }}>
          <Link to='/trang-chu'>Quay lại trang chủ</Link>
        </div>
      </form>

    </Container>
  );
};

export default LoginPage;
