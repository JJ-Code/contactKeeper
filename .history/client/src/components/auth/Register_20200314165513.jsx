
import React, { useState } from 'react'

const Register = () => {
const [user, setUser] = useState({
name: '',
email: '',
password:'',
password2: ''

});

const {name, email, password, password2 } = user;

  return (
    <div className='form-container'>
      <h1>Account <span>Register</span></h1>

    </div>
  )
}


export default Register;