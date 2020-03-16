import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const PrivateRoute = ({component: Component, rest}) => {
  const authContext = useContext(AuthContext);
  const { loading, isAuthenticated } = authContext;

  return (
    <div>
      <R
    </div>
  )
}


export default PrivateRoute;