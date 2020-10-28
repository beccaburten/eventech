import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION } from '../actions/reg_actions';
import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let userToUpdate;
    let updatedEvents;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_EVENT:
            
            return Object.assign(nextState, { [action.organizer.id]: action.organizer });
        
        case RECEIVE_REGISTRATION:
            userToUpdate = state[action.registration.user_id]
            userToUpdate.attendingEvents.push(action.registration.event_id) 
            return Object.assign(nextState, { [userToUpdate.id]: userToUpdate })
        case DELETE_REGISTRATION:
            userToUpdate = state[action.unregistration.user_id]
            updatedEvents = userToUpdate.attendingEvents.filter((eventId) => eventId !== action.unregistration.event_id)
            userToUpdate.attendingEvents = updatedEvents;
            return Object.assign(nextState, { [userToUpdate.id]: userToUpdate })
        
        case RECEIVE_LIKE:
            userToUpdate = state[action.like.user_id]
            userToUpdate.likedEvents.push(action.like.event_id) 
            
            return Object.assign(nextState, { [userToUpdate.id]: userToUpdate })
        case DELETE_LIKE:
            userToUpdate = state[action.unlike.user_id]
            updatedEvents = userToUpdate.likedEvents.filter((eventId) => eventId !== action.unlike.event_id)
            userToUpdate.likedEvents = updatedEvents;
            
            return Object.assign(nextState, { [userToUpdate.id]: userToUpdate })

        default:
            return state;
    }
};