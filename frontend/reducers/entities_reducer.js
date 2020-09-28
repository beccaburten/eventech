import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import registrationsReducer from './registrations_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    registrations: registrationsReducer
})

export default entitiesReducer;
