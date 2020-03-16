import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const PrivateRoute = ({component: Component, rest}) => {
  const authContext = useContext(AuthContext);
  const { loading, isAuthenticated } = authContext;

  return (
    <div>
      
    </div>
  )
}


export default PrivateRoute;