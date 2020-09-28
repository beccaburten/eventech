import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import eventErrorsReducer from './events_errors_reducer';
import registrationErrorsReducer from './registration_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    event: eventErrorsReducer,
    registration: registrationErrorsReducer
});

export default errorsReducer;