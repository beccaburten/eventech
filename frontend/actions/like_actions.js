import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';
export const LIKE_ERRORS =  'LIKE_ERRORS';

// like set up as: {user_id: #, event_id: #}
const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

// unlike set up as: {user_id: #, event_id: #}
const deleteLike = unlike => ({
    type: DELETE_LIKE,
    unlike
});

const receiveErrors = errors => ({
    type: LIKE_ERRORS,
    errors
});

//THUNK ACTION CREATORS

//like returned is hash with user and event ids
export const createLike = (event_id) => dispatch => {
    debugger;
    return LikeApiUtil.likeEvent(event_id).then(
        like => (dispatch(receiveLike(like))),
        err => { dispatch(receiveErrors(err.responseJSON)) }
    )
};

//ids is hash with both user and event id
export const destroyLike = (ids) => dispatch => {
    debugger;
    return LikeApiUtil.unlikeEvent(ids)
        .then((unlike) => dispatch(deleteLike(unlike)))
};