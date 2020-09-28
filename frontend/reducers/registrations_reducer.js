import {
    RECEIVE_ALL_REGISTRATIONS, 
    RECEIVE_REGISTRATION, 
    DELETE_REGISTRATION } from '../actions/reg_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_REGISTRATIONS:
            return action.registrations;
        case RECEIVE_REGISTRATION:
            return Object.assign(nextState, { [action.registration.id]: action.registration });;
        case DELETE_REGISTRATION:
            delete nextState[action.regId]
            return nextState;
        default:
            return state;
    }
};