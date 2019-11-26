import { Redirect } from '@reach/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserType } from '../../types/User';

const withProtection = Component => props => {
  const loggedIn = useSelector(state => state.user).usertype != UserType.None;
  return loggedIn ? <Component {...props} /> : <Redirect to="/login" noThrow />;
};

export default withProtection;