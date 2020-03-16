import React, {useState, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;


  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger')
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history])



  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;
  const onChange = event => setUser({ ...user, [event.target.name]: event.target.value });




  const onSubmit = event => {
    event.preventDefault();
    console.log("Login submit");

  };

  return (
    <div className='form-container'>
      <h1>Account <span className='text-primary'>Login</span></h1>
      <form onSubmit={onSubmit}>




        <div className='form-group'>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>


        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} />
        </div>



        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />

      </form>

    </div>
  )
}


export default Login;