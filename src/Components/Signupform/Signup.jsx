import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
  return (
<div className='adduser'>
  <h1>Sign Up</h1>
    <form className='adduserform'>
      <div className='input-group'>

          <label htmlfor='name'>Name :</label>
          <input type='text'id='name'
          placeholder='Enter your name'
          autocomplete="off"
          />

          <label htmlfor='email'>Email :</label>
          <input type='text'id='email'
          placeholder='Enter your email address'
          autocomplete="off"/>

          <label htmlfor='password'>Password :</label>
          <input type='text'id='password'
          placeholder='Enter your password'
          autocomplete="off"/>

      
          <label htmlfor='Phone No'>Phone NO :</label>
          <input type='text'id='Phone No'
          placeholder='Enter your Phone Number'
          autocomplete="off"/>

        <Link to='/' type="submit" class="btn btn-success">
          SIGN IN
          </Link>
          
      
        </div>
    </form>
</div>
  )
}
export default Signup;