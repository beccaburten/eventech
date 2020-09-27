import { connect } from 'react-redux';
import React from 'react';
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    const eventId = ownProps.match.params.eventId;
    return ({ event: state.entities.events[eventId], eventId })
};

const mDTP = (dispatch) => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(EventShow);