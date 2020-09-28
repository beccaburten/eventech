import { connect } from 'react-redux';
import React from 'react';
import { registerUser, unregisterUser } from '../../actions/reg_actions';
import { closeModal } from '../../actions/modal_actions';
import RegistrationModal from './registration.jsx';

const mSTP = (state, ownProps) => {
    // const event_id = ownProps.match.params.eventId;
    // return { event_id };
    return {};
};

const mDTP = dispatch => {
    return {
        registerUser: (registration) => dispatch(registerUser(registration)),
        unregisterUser: (regId) => dispatch(unregisterUser(regId)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(RegistrationModal);