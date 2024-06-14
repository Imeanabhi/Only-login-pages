import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    
<div className='adduser'>
<h1>Sign IN</h1>
    <form className='adduserform'>
    <div className='input-group'>

        <label htmlfor='email'>Email :</label>
        <input type='text'id='email'
        placeholder='Enter your email address'
        autocomplete="off"/>

    <label htmlfor='password'>Password :</label>
    <input type='text'id='password'
    placeholder='Enter your password'
    autocomplete="off"/>
          <button type="submit" class="btn btn-success">
          LOGIN
          </button>
      
        </div>
    </form>
<div className='Login'>
  <p>Dont have an account ?</p>
  <Link to = '/signup' type="submit"
  class="btn btn-primary">
  SIGN UP
  </Link>
</div>
</div>
  )
}

export default Login;
