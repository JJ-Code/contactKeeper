import React, {useContext} from 'react'
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from '../../context/auth/authContext';
import authContext from '../../context/auth/authContext';


const Home = () => {
  const AuthContext = useContext(AuthContext);

  useEffect(() => {
authContext
  }, [input])


  return (
    <div className="grid-2">
      <div> <ContactForm /> </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
      {/* <h1>
        home
        <p className="my-1">
        </p>
      </h1> */}
    </div>
  )
}

export default Home;