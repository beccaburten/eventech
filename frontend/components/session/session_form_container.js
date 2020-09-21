import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors,
});

// const mDTP = (dispatch) => ({
//     checkForUser: (username) => dispatch(...(username))
// })

export default connect(mSTP, mDTP)(SessionForm);