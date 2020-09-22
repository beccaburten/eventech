import { connect } from 'react-redux';
import React from 'react';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    errors: state.errors,
});

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default withRouter(connect(mSTP, mDTP)(LoginForm));