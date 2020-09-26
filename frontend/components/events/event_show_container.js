import { connect } from 'react-redux';
import React from 'react';
import { fetchEvent } from '../../actions/event_actions'
import EventShow from './event_show';

const mSTP = (state, ownProps) => ({
    event: state.events[ownProps.match.params.eventId]
});

const mDTP = (dispatch) => ({
    fetchEvent: () => dispatch(fetchEvents())
})

export default connect(mSTP, mDTP)(EventShow);