import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { checkForUser, login } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors,
});

const mDTP = (dispatch) => ({
    checkForUser: (email, obj) => dispatch(checkForUser(email, obj)),
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);