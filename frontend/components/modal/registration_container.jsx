import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';
import { registerUser, unregisterUser } from '../../actions/reg_actions';
import { closeModal } from '../../actions/modal_actions';
import RegistrationModal from './registration.jsx';

const mSTP = (state, ownProps) => {
    debugger;
    const currentUserId = state.session.id;
    //my user is currently the 'organizer' but is the session id just our currentUser's id?
    const event = state.entities.events[ownProps.location.pathname.split("/").reverse()[0]]; 
    let attending = "false";
    event.attendees.forEach(user => {
        if(user.id === currentUserId) attending = "true"
    });
    debugger;
    return ({ currentUserId: currentUserId, 
        event: event,
        attending });
};

const mDTP = dispatch => {
    return {
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        registerUser: (registration) => dispatch(registerUser(registration)),
        unregisterUser: (regId) => dispatch(unregisterUser(regId)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mSTP, mDTP)(RegistrationModal));