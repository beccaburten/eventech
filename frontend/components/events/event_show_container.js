import { connect } from 'react-redux';
import React from 'react';
import { fetchEvent } from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    debugger;
    const eventId = ownProps.match.params.eventId;
    if (state.entities.events[eventId]) {
        return (
            { event: state.entities.events[eventId], 
                organizer: state.entities.users[state.entities.events[eventId].organizer_id],
                eventId })
    } else {
        return ({
            event: state.entities.events[eventId],
            organizer: {},
            eventId})
    }
};

const mDTP = (dispatch) => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(EventShow);