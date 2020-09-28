import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION } from '../actions/reg_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_EVENT:
            return Object.assign(nextState, { [action.organizer.id]: action.organizer });
        case RECEIVE_REGISTRATION:
            return Object.assign(nextState, { [action.registration.id]: action.registration } )
        default:
            return state;
    }
};