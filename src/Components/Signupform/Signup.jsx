import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: '',
    userEmail: '',
    userPhone: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        UserName: formData.userName,
        UserPassword: formData.userPassword,
        UserEmail: formData.userEmail,
        UserPhone: formData.userPhone,
      });
const data=response.data
      if (data.success) {
        navigate('/'); 
      } else {
        console.error('Registration failed:', data.error);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='adduser'>
      <h1>Sign Up</h1>
      <form className='adduserform' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            id='userName'
            value={formData.userName}
            onChange={handleChange}
            placeholder='Enter your name'
            autoComplete='off'
          />

          <label htmlFor='email'>Email :</label>
          <input
            type='text'
            id='userEmail'
            value={formData.userEmail}
            onChange={handleChange}
            placeholder='Enter your email address'
            autoComplete='off'
          />

          <label htmlFor='password'>Password :</label>
          <input
            type='password'
            id='userPassword'
            value={formData.userPassword}
            onChange={handleChange}
            placeholder='Enter your password'
            autoComplete='off'
          />

          <label htmlFor='phoneNo'>Phone No :</label>
          <input
            type='text'
            id='userPhone'
            value={formData.userPhone}
            onChange={handleChange}
            placeholder='Enter your Phone Number'
            autoComplete='off'
          />

          <button type='submit' className='btn btn-success'>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
