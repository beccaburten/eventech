import { connect } from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    errors: state.errors
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default withRouter(connect(mSTP, mDTP)(SignupForm));