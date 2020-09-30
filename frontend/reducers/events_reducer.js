import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, DELETE_EVENT, CLEAR_EVENTS } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION } from '../actions/reg_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    let nextState = Object.assign({}, state);
    let eventToUpdate;
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return Object.assign(nextState, action.events);
        case RECEIVE_EVENT:
            // return action.event;
            // return { event: action.event };
            return Object.assign(nextState, action.event);
        case DELETE_EVENT:
            delete nextState[action.eventId]
            return nextState;
        // case RECEIVE_ALL_REGISTRATIONS:
        //     return action.registrations.events;
            // return Object.assign(nextState, action.registrations);
        // case RECEIVE_TICKET:
        //     debugger;
        //     return action.registration.event;
        case RECEIVE_REGISTRATION:
            debugger;
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