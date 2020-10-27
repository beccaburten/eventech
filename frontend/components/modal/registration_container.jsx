import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';
import { registerUser, unregisterUser } from '../../actions/reg_actions';
import { closeModal } from '../../actions/modal_actions';
import RegistrationModal from './registration.jsx';

const mSTP = (state, ownProps) => {
    
    const user_id = state.session.id;
    //my user is currently the 'organizer' but is the session id just our currentUser's id?
    const event = state.entities.events[ownProps.location.pathname.split("/").reverse()[0]]; 
    // let attending = "false";
    // event.attendees.forEach(userId => {
    //     if (userId === user_id) attending = "true";
    // });
    const attendingEvents = state.entities.users[user_id].attendingEvents;
    
    // return ({ user_id, event, attending });
    return ({ user_id, event, attendingEvents });
};

const mDTP = dispatch => {
    return {
        fetchEvent: (event_id) => dispatch(fetchEvent(event_id)),
        registerUser: (registration) => dispatch(registerUser(registration)),
        unregisterUser: (ids) => dispatch(unregisterUser(ids)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mSTP, mDTP)(RegistrationModal));