import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchEvent, clearEvents } from '../../actions/event_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import EventsIndex from './events_index';

const mSTP = (state) => {
    const currentUserId = state.session.id;
    const likedEvents = state.entities.users[currentUserId].likedEvents;
    debugger;
    return {
    currentUserId, likedEvents,
    events: Object.values(state.entities.events)
    }
}
    

const mDTP = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    clearEvents: () => dispatch(clearEvents()),
    createLike: (event_id) => dispatch(createLike(event_id)),
    destroyLike: (ids) => dispatch(destroyLike(ids))
})

export default connect(mSTP, mDTP)(EventsIndex);