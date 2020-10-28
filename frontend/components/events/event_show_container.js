import { connect } from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router-dom';
import { fetchEvent, destroyEvent } from '../../actions/event_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import { openModal } from '../../actions/modal_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    // 
    const currentUserId = state.session.id;
    const eventId = ownProps.match.params.eventId;
    let likedEvents;
    currentUserId ? likedEvents = state.entities.users[currentUserId].likedEvents : likedEvents = [];
    if (state.entities.events[eventId]) {
        return ({ event: state.entities.events[eventId], 
            organizer: state.entities.users[state.entities.events[eventId].organizer_id],
            eventId, currentUserId, likedEvents
        })
    } else {
        return ({
            event: state.entities.events[eventId],
            organizer: {},
            eventId, currentUserId, likedEvents
        })
    }
};

const mDTP = (dispatch) => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    destroyEvent: (eventId) => dispatch(destroyEvent(eventId)),
    createLike: (event_id) => dispatch(createLike(event_id)),
    destroyLike: (ids) => dispatch(destroyLike(ids)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(EventShow));


// const mSTP = (state, ownProps) => {
//     // 
//     const eventId = ownProps.match.params.eventId;
//     if (state.entities.events[eventId]) {
//         return (
//             {
//                 event: state.entities.events[eventId],
//                 organizer: state.entities.users[state.entities.events[eventId].organizer_id],
//                 eventId
//             })
//     } else {
//         return ({
//             event: state.entities.events[eventId],
//             organizer: {},
//             eventId
//         })
//     }
// };