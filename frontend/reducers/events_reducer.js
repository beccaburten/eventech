import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, DELETE_EVENT, CLEAR_EVENTS } from '../actions/event_actions';
import { RECEIVE_ALL_REGISTRATIONS, RECEIVE_TICKET } from '../actions/reg_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    let nextState = Object.assign({}, state);
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
        case RECEIVE_ALL_REGISTRATIONS:
            return action.registrations.events;
            // return Object.assign(nextState, action.registrations);
        case RECEIVE_TICKET:
            debugger;
            return action.registration.event;
        case CLEAR_EVENTS:
            return {};
        default:
            return state;
    }
};