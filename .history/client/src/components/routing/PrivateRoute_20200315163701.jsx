import React, {useContext} from 'react'
import AuthContext from '../../context/auth/authContext';


const PrivateRoute = ({component: Component }) => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      
    </div>
  )
}


export default PrivateRoute;