import { RECEIVE_REGISTRATION, REGISTRATION_ERRORS } from '../actions/reg_actions';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_REGISTRATION:
            return []
        case REGISTRATION_ERRORS:
            return action.errors
        default:
            return state
    }
};