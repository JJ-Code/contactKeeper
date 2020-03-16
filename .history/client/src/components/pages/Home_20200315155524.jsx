import React from 'react'
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from '../../context/auth/authContext';


const Home = () => {
    const auth
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