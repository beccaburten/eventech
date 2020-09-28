import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_EVENT:
            return Object.assign({}, state, { [action.organizer.id]: action.organizer })
        default:
            return state;
    }
};