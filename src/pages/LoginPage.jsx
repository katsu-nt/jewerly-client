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
    if (user && cart) {
      // Only navigate when both user and cart are set
      if (user.role === 'user') {
        navigate('/');
      } else if (user.role === 'admin') {
        navigate('/admin');
      }
    }
  }, [user, cart, navigate]); // Watch user and cart changes

  const handleLogin = async () => {
    const userRes = await SignIn({ email, password });

    if (!userRes) {
      setEmail('');
      setPassword('');
    } else {
      // Set user data
      setUser(userRes);
      login(userRes.role);

      // Fetch the cart for the user and set the cart state
      const cartData = await getCart(userRes._id);
      setCart(cartData);
      localStorage.setItem('cart', JSON.stringify(cartData));

      // Hide password before storing in localStorage
      const dataUser = { ...userRes, password: '********' };
      localStorage.setItem('account', JSON.stringify(dataUser));
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
