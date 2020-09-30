import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, RECEIVE_ALL_REGISTRATIONS, RECEIVE_TICKET, DELETE_REGISTRATION } from '../actions/reg_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_EVENT:
            return Object.assign(nextState, { [action.organizer.id]: action.organizer });
        case RECEIVE_REGISTRATION:
            return Object.assign(nextState, { [action.registration.id]: action.registration });
        case DELETE_REGISTRATION:
        // need to update user here, so I return from controller the updated user 
        // but action takes in the Reg's id...is that the variable it also returns?
        // how to access controller rendered json from the delete action?
            return Object.assign(nextState, { [action.unregUser.id]: action.unregUser });
        case RECEIVE_ALL_REGISTRATIONS:
            nextState[action.registrations.currentUser.id] = action.registrations.currentUser;
            return nextState;
        case RECEIVE_TICKET:
            debugger;
            nextState[action.registration.user.id] = action.registration.user;
            return nextState;
        default:
            return state;
    }
};