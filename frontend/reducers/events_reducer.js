import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, DELETE_EVENT, CLEAR_EVENTS } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION } from '../actions/reg_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let eventToUpdate;
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return Object.assign(nextState, action.events);
        case RECEIVE_EVENT:
            return Object.assign(nextState, action.event);
        case DELETE_EVENT:
            delete nextState[action.eventId];
            debugger;
            return nextState;
        case RECEIVE_REGISTRATION:
            eventToUpdate = state[action.registration.event_id]
            eventToUpdate.attendees.push(action.registration.user_id)
            return Object.assign(nextState, { [eventToUpdate.id]: eventToUpdate })
        case DELETE_REGISTRATION:
            eventToUpdate = state[action.unregistration.event_id]
            let removedUser = eventToUpdate.attendees.filter((user) => user.id !== action.unregistration.user_id)
            eventToUpdate.attendees = removedUser;
            return Object.assign(nextState, { [eventToUpdate.id]: eventToUpdate })
        case CLEAR_EVENTS:
            return {};
        default:
            return state;
    }
};