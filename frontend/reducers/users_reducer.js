import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION } from '../actions/reg_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let userToUpdate;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_EVENT:
            return Object.assign(nextState, { [action.organizer.id]: action.organizer });
        case RECEIVE_REGISTRATION:
            userToUpdate = state[action.registration.user_id]
             ;
            userToUpdate.attendingEvents.push(action.registration.event_id) 
            return Object.assign(nextState, { [userToUpdate.id]: userToUpdate })
        case DELETE_REGISTRATION:
            userToUpdate = state[action.unregistration.user_id]
            let updatedEvents = userToUpdate.attendingEvents.filter((eventId) => eventId !== action.unregistration.event_id)
            userToUpdate.attendingEvents = updatedEvents;
             ;
            return Object.assign(nextState, { [userToUpdate.id]: userToUpdate })
        // case RECEIVE_ALL_REGISTRATIONS:
        //     nextState[action.registrations.currentUser.id] = action.registrations.currentUser;
        //     return nextState;
        // case RECEIVE_TICKET:
        //      ;
        //     nextState[action.registration.user.id] = action.registration.user;
        //     return nextState;
        default:
            return state;
    }
};