import { connect } from 'react-redux';
import React from 'react';
import { fetchEvents, fetchEvent } from '../../actions/event_actions'
import EventsIndex from './events_index';

const mSTP = (state) => ({
    events: Object.values(state.entities.events)
});

const mDTP = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(EventsIndex);