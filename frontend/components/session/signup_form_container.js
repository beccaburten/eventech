import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors,
    formType: 'signup'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})
// ownProps NOT needed here
// would need ownProps in mSTP if we wanted to render a show page
// and grab info from the state beforehand
// in mDTP we could invoke the callback func with id from params if avail


export default connect(mSTP, mDTP)(SessionForm);