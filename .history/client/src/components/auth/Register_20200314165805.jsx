
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
      <h1>Account <span className='text-primary'>Register</span></h1>
      <form action="">
        <div className="className form-group">
          <label htmlFor="name">Name</label>
          <input></input>
          </div>  
      </form>

    </div>
  )
}


export default Register;