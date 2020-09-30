import * as RegistrationApiUtil from '../util/reg_api_util';

export const RECEIVE_ALL_REGISTRATIONS = 'RECEIVE_ALL_REGISTRATIONS';
export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const REGISTRATION_ERRORS =  'REGISTRATION_ERRORS';

//REGULAR ACTIONS

const receiveAllReg = registrations => {
    return {
    type: RECEIVE_ALL_REGISTRATIONS,
    registrations
    }
}; //this should go to events reducer and update the events there

//hits REGISTRATION SHOW to send back one event and current user info
const fetchTicket = registration => {
    return {
        type: RECEIVE_TICKET,
        registration
    }
};


// these actions go to the users reducer, from USER SHOW info
const receiveReg = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
});
//registration create now sends a USER with the new association added via model

const deleteReg = unregUser => ({
    type: DELETE_REGISTRATION,
    unregUser
});

const receiveErrors = errors => ({
    type: REGISTRATION_ERRORS,
    errors
});

//THUNK ACTION CREATORS


export const fetchUserRegistrations = () => dispatch => (
    RegistrationApiUtil.fetchUserRegistrations()
        .then(registrations => dispatch(receiveAllReg(registrations)))
);

export const fetchRegistration = (regId) => dispatch => {
    debugger;
    return RegistrationApiUtil.fetchRegistration(regId)
        .then(registration => dispatch(fetchTicket(registration)))
}

export const registerUser = (registration) => dispatch => (
    RegistrationApiUtil.registerUser(registration).then(
        registration => (dispatch(receiveReg(registration))),
        err => { dispatch(receiveErrors(err.responseJSON)) }
    )
);

export const unregisterUser = (regId) => dispatch => {
    debugger;
    return RegistrationApiUtil.unregisterUser(regId)
        .then((unregUser) => dispatch(deleteReg(unregUser)))
};