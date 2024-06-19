import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        UserEmail: email,
        UserPassword: password,
      });

      const data = response.data;

      if (data.success) {
        navigate('/Search');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again !');
    }
  };

  return (
    <div className='adduser'>
      <h1>Sign IN</h1>
      <form className='adduserform' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='email'>Email :</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
            autoComplete='off'
          />

          <label htmlFor='password'>Password :</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            autoComplete='off'
          />

          <button type='submit' className='btn btn-success'>
            LOGIN
          </button>
        </div>
      </form>

      <p className='error-message'>{error}</p>

      <div className='Login'>
        <p>Don't have an account?</p>
        <button onClick={goToSignup} className=' btn-primary'>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
export default Login;