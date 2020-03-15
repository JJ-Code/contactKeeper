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
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null

  }



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










