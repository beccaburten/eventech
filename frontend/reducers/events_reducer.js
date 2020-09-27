import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, DELETE_EVENT, CLEAR_EVENTS } from '../actions/event_actions';
//eventsReducer

export default (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return Object.assign(nextState, action.events);
        case RECEIVE_EVENT:
            return action.event;
            // return { event: action.event };
            // return Object.assign(nextState, { [action.event.id]: action.event });;
        case DELETE_EVENT:
            delete nextState[action.eventId]
            return nextState;
        case CLEAR_EVENTS:
            return {};
        default:
            return state;
    }
};