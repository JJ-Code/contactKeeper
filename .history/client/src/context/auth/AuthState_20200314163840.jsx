import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
REMOVE_ALERT,
REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERRORS
} from '../types.js';

export const AuthState = props => {

  const initialState = {


  }

  //state comes from useReducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Get Contacts

  // Add Contact
  const addContact = contact => {
    contact._id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  }

  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }
  // Set Current Contact
  const setCurrent = contact =>{
    dispatch({type: SET_CURRENT, payload: contact})
  }

  // Clear Contacts
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT});
  };

  //update contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };


  // Filter Contacts
  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  };

  // Clear Filter
  const clearFilter = contact => {
    dispatch({
      type: CLEAR_FILTER
    });
  };


  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;










