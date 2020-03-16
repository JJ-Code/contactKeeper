import React, { Fragment, useContext, const context = useContext(contextValue)} from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";


const Contacts = () => {

  //coming from contact state first line allows you to use it and the 2nd is access to it
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  console.log(contacts);

  if (contacts.length == 0) {
    return <h4>Please add a contact</h4>
  }


  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);


  return (

    <Fragment>
      <TransitionGroup>
        {filtered !== null ? filtered.map(contact => (
          <CSSTransition key={contact._id} timeout={500} classNames="item">
            <ContactItem contact={contact}/>
          </CSSTransition>
        ))
          : contacts.map(contact => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}


      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts;