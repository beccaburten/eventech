import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { checkForUser } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors,
});

const mDTP = (dispatch) => ({
    checkForUser: (email) => dispatch(checkForUser(email))
})

export default connect(mSTP, mDTP)(SessionForm);