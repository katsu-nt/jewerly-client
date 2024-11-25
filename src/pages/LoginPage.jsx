import React, { useState } from 'react';
import { useAuth } from '../context/authContext.jsx';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import { login as SignIn } from "../APIs/MyUserApi.js"
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await SignIn({ email, password }).then((user) => {
      if (!user) {
        setEmail("")
        setPassword("")
      } else {
        login(user.role)
        if (user.role == "user") {
          navigate('/user');
        }
        if (user.role == "admin") {
          navigate('/admin');
        }
      }
    })

  };

  return (
    <Container maxWidth="sm">
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
      </form>

    </Container>
  );
};

export default LoginPage;
