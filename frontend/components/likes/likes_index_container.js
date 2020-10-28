import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvents } from '../../actions/event_actions';
import { destroyLike } from '../../actions/like_actions';
import LikesIndex from './likes_index.jsx';

const mSTP = (state) => {
    const currentUserId = state.session.id
    const user = state.entities.users[currentUserId];
    const likedEventsIds = user.likedEvents;
    debugger;
    const likedEvents = likedEventsIds.map((id) => state.entities.events[id])
    return ({ user, currentUserId, likedEvents })
};

const mDTP = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents()),
        destroyLike: (ids) => dispatch(destroyLike(ids))
    })
};

export default withRouter(connect(mSTP, mDTP)(LikesIndex));
