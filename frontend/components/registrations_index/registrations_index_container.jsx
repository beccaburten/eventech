import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvents } from '../../actions/event_actions';
import RegistrationsIndex from './registrations_index.jsx';

const mSTP = (state) => {
    const user = state.entities.users[state.session.id];
    const attendingEventsIds = user.attendingEvents;
    const attendingEvents = attendingEventsIds.map((id) => state.entities.events[id])
    
    return ({ user, attendingEvents })
};

const mDTP = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    })
};

export default withRouter(connect(mSTP, mDTP)(RegistrationsIndex));
